import { useState, useEffect } from 'react';
import { useUrgencyValues } from '@/hooks/useUrgencyValues';
import { Button } from '@/components/ui/button';
import { X, RefreshCw, Bug } from 'lucide-react';

interface SyncEvent {
  timestamp: string;
  type: 'broadcast' | 'storage' | 'local';
  field: string;
  value: number;
}

const STORAGE_KEYS = {
  SLOTS_REMAINING: 'urgency_slots_remaining',
  WEEKLY_REQUESTS: 'urgency_weekly_requests',
  CALLBACK_SLOTS: 'urgency_callback_slots',
};

export const UrgencyDebugPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [syncEvents, setSyncEvents] = useState<SyncEvent[]>([]);
  const [localStorageState, setLocalStorageState] = useState<Record<string, string>>({});
  
  const urgencyValues = useUrgencyValues();

  // Read localStorage state
  const refreshLocalStorage = () => {
    const state: Record<string, string> = {};
    Object.values(STORAGE_KEYS).forEach(key => {
      const value = localStorage.getItem(key);
      if (value) state[key] = value;
    });
    setLocalStorageState(state);
  };

  // Listen for sync events
  useEffect(() => {
    refreshLocalStorage();

    const handleStorage = (e: StorageEvent) => {
      if (e.key && Object.values(STORAGE_KEYS).includes(e.key)) {
        const event: SyncEvent = {
          timestamp: new Date().toLocaleTimeString(),
          type: 'storage',
          field: e.key,
          value: e.newValue ? JSON.parse(e.newValue).value : 0,
        };
        setSyncEvents(prev => [event, ...prev].slice(0, 20));
        refreshLocalStorage();
      }
    };

    const channel = new BroadcastChannel('urgency_sync');
    const handleBroadcast = (e: MessageEvent) => {
      let event: SyncEvent;
      
      if (e.data.type === 'COUNTDOWN_RESET') {
        event = {
          timestamp: new Date().toLocaleTimeString(),
          type: 'broadcast',
          field: 'countdown_reset',
          value: 299,
        };
      } else {
        event = {
          timestamp: new Date().toLocaleTimeString(),
          type: 'broadcast',
          field: Object.keys(e.data.values || {})[0] || 'unknown',
          value: Object.values(e.data.values || {})[0] as number || 0,
        };
      }
      setSyncEvents(prev => [event, ...prev].slice(0, 20));
      refreshLocalStorage();
    };

    window.addEventListener('storage', handleStorage);
    channel.addEventListener('message', handleBroadcast);

    return () => {
      window.removeEventListener('storage', handleStorage);
      channel.removeEventListener('message', handleBroadcast);
      channel.close();
    };
  }, []);

  // Refresh localStorage on urgency value changes
  useEffect(() => {
    refreshLocalStorage();
  }, [urgencyValues.slotsRemaining, urgencyValues.weeklyRequests, urgencyValues.callbackSlots]);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-[9999] p-2 bg-destructive text-destructive-foreground rounded-full shadow-lg hover:opacity-90"
        title="Open Debug Panel"
      >
        <Bug className="h-5 w-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 z-[9999] w-80 max-h-[70vh] overflow-auto bg-background border border-border rounded-lg shadow-xl text-sm">
      <div className="sticky top-0 bg-muted p-2 flex items-center justify-between border-b border-border">
        <span className="font-semibold text-foreground">Urgency Debug Panel</span>
        <div className="flex gap-1">
          <Button size="icon" variant="ghost" className="h-6 w-6" onClick={refreshLocalStorage}>
            <RefreshCw className="h-3 w-3" />
          </Button>
          <Button size="icon" variant="ghost" className="h-6 w-6" onClick={() => setIsOpen(false)}>
            <X className="h-3 w-3" />
          </Button>
        </div>
      </div>

      <div className="p-3 space-y-4">
        {/* Current Values */}
        <div>
          <h3 className="font-medium text-foreground mb-2">Current Values</h3>
          <div className="space-y-1 text-muted-foreground">
            <div className="flex justify-between">
              <span>Slots Remaining:</span>
              <span className="font-mono text-foreground">{urgencyValues.slotsRemaining}</span>
            </div>
            <div className="flex justify-between">
              <span>Weekly Requests:</span>
              <span className="font-mono text-foreground">{urgencyValues.weeklyRequests}</span>
            </div>
            <div className="flex justify-between">
              <span>Callback Slots:</span>
              <span className="font-mono text-foreground">{urgencyValues.callbackSlots}</span>
            </div>
            <div className="flex justify-between">
              <span>Exit Countdown:</span>
              <span className="font-mono text-foreground">{urgencyValues.formatCountdown(urgencyValues.exitCountdown)}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div>
          <h3 className="font-medium text-foreground mb-2">Test Actions</h3>
          <div className="flex flex-wrap gap-2">
            <Button size="sm" variant="outline" onClick={urgencyValues.decrementSlots}>
              -1 Slot
            </Button>
            <Button size="sm" variant="outline" onClick={urgencyValues.incrementWeeklyRequests}>
              +1 Request
            </Button>
            <Button size="sm" variant="outline" onClick={urgencyValues.decrementCallbackSlots}>
              -1 Callback
            </Button>
            <Button size="sm" variant="outline" onClick={urgencyValues.resetExitCountdown}>
              Reset Timer
            </Button>
          </div>
        </div>

        {/* localStorage State */}
        <div>
          <h3 className="font-medium text-foreground mb-2">localStorage State</h3>
          <div className="bg-muted p-2 rounded text-xs font-mono overflow-x-auto">
            {Object.entries(localStorageState).map(([key, value]) => (
              <div key={key} className="text-muted-foreground">
                <span className="text-primary">{key.replace('urgency_', '')}:</span>
                <pre className="inline ml-1 text-foreground">{value}</pre>
              </div>
            ))}
            {Object.keys(localStorageState).length === 0 && (
              <span className="text-muted-foreground">No urgency data in localStorage</span>
            )}
          </div>
        </div>

        {/* Sync Events */}
        <div>
          <h3 className="font-medium text-foreground mb-2">Sync Events (Last 20)</h3>
          <div className="bg-muted p-2 rounded text-xs max-h-32 overflow-auto">
            {syncEvents.length === 0 ? (
              <span className="text-muted-foreground">No sync events yet. Try another tab.</span>
            ) : (
              syncEvents.map((event, i) => (
                <div key={i} className="text-muted-foreground">
                  <span className="text-foreground">{event.timestamp}</span>
                  {' '}
                  <span className={event.type === 'broadcast' ? 'text-primary' : 'text-chart-2'}>
                    [{event.type}]
                  </span>
                  {' '}
                  {event.field}: {event.value}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
