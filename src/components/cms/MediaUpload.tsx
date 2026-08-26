import { useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Loader2, Upload, Link2, X } from "lucide-react";

export const MAX_UPLOAD_BYTES = 20 * 1024 * 1024;

const safeName = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9.\-_]+/g, "-")
    .replace(/-+/g, "-")
    .slice(-80);

export async function uploadMedia(file: File): Promise<string> {
  if (file.size > MAX_UPLOAD_BYTES) {
    throw new Error("File is larger than 20MB");
  }
  const { data: userData } = await supabase.auth.getUser();
  const uid = userData.user?.id;
  if (!uid) throw new Error("You must be signed in to upload media");

  const path = `${uid}/${Date.now()}-${safeName(file.name)}`;
  const { error } = await supabase.storage.from("blog-media").upload(path, file, {
    cacheControl: "31536000",
    upsert: false,
    contentType: file.type || undefined,
  });
  if (error) throw error;

  const { data } = supabase.storage.from("blog-media").getPublicUrl(path);
  return data.publicUrl;
}

interface Props {
  value: string;
  onChange: (url: string) => void;
  label?: string;
  accept?: string;
  preview?: boolean;
}

export const MediaUpload = ({ value, onChange, accept = "image/*", preview = true }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [mode, setMode] = useState<"upload" | "url">("upload");
  const [busy, setBusy] = useState(false);
  const [dragging, setDragging] = useState(false);

  const handleFile = async (file?: File | null) => {
    if (!file) return;
    setBusy(true);
    try {
      const url = await uploadMedia(file);
      onChange(url);
      toast.success("Uploaded");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-1">
        <Button
          type="button"
          size="sm"
          variant={mode === "upload" ? "secondary" : "ghost"}
          onClick={() => setMode("upload")}
        >
          <Upload className="w-3.5 h-3.5 mr-1" /> Upload
        </Button>
        <Button
          type="button"
          size="sm"
          variant={mode === "url" ? "secondary" : "ghost"}
          onClick={() => setMode("url")}
        >
          <Link2 className="w-3.5 h-3.5 mr-1" /> Use URL
        </Button>
      </div>

      {mode === "upload" ? (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            handleFile(e.dataTransfer.files?.[0]);
          }}
          onClick={() => !busy && inputRef.current?.click()}
          className={`flex flex-col items-center justify-center gap-1 rounded-md border border-dashed px-4 py-6 text-center text-sm cursor-pointer transition-colors ${
            dragging ? "border-primary bg-primary/5" : "border-input hover:bg-muted/50"
          }`}
        >
          {busy ? (
            <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
          ) : (
            <Upload className="w-5 h-5 text-muted-foreground" />
          )}
          <span className="text-muted-foreground">
            {busy ? "Uploading…" : "Drop a file or click to browse"}
          </span>
          <span className="text-xs text-muted-foreground/70">Max 20MB</span>
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
        </div>
      ) : (
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://..."
        />
      )}

      {value && (
        <div className="relative">
          {preview && (
            <img src={value} alt="Media preview" className="rounded-md w-full aspect-video object-cover" />
          )}
          <div className="mt-1 flex items-center gap-2">
            <p className="text-xs text-muted-foreground break-all flex-1">{value}</p>
            <Button type="button" size="icon" variant="ghost" onClick={() => onChange("")}
              aria-label="Remove media">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
