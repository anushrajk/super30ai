import { useState, useEffect, useRef } from "react";

interface UseCountUpOptions {
  duration?: number;
  startOnMount?: boolean;
  decimals?: number;
}

export const useCountUp = (
  target: number,
  options: UseCountUpOptions = {}
) => {
  const { duration = 2000, startOnMount = true, decimals = 0 } = options;
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  const animate = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
    
    // Easing function for smooth deceleration
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const currentValue = easeOutQuart * target;

    setCount(Number(currentValue.toFixed(decimals)));

    if (progress < 1) {
      rafRef.current = requestAnimationFrame(animate);
    } else {
      setCount(target);
      setIsComplete(true);
    }
  };

  const start = () => {
    setIsComplete(false);
    startTimeRef.current = null;
    rafRef.current = requestAnimationFrame(animate);
  };

  const reset = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    setCount(0);
    setIsComplete(false);
    startTimeRef.current = null;
  };

  useEffect(() => {
    if (startOnMount) {
      start();
    }

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [target, duration, startOnMount]);

  return { count, isComplete, start, reset };
};
