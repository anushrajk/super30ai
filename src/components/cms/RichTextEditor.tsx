import { useCallback, useMemo, useRef } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import "./rich-text-editor.css";
import { uploadMedia } from "./MediaUpload";
import { toast } from "sonner";

interface Props {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

export const RichTextEditor = ({ value, onChange, placeholder }: Props) => {
  const quillRef = useRef<ReactQuill | null>(null);

  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      const editor = quillRef.current?.getEditor();
      const range = editor?.getSelection(true);
      const toastId = toast.loading("Uploading image…");
      try {
        const url = await uploadMedia(file);
        editor?.insertEmbed(range?.index ?? 0, "image", url, "user");
        editor?.setSelection({ index: (range?.index ?? 0) + 1, length: 0 });
        toast.success("Image uploaded", { id: toastId });
      } catch (err) {
        toast.error(err instanceof Error ? err.message : "Upload failed", { id: toastId });
      }
    };
    input.click();
  }, []);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [2, 3, 4, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image", "code-block"],
          [{ align: [] }],
          ["clean"],
        ],
        handlers: { image: imageHandler },
      },
    }),
    [imageHandler],
  );

  return (
    <div className="cms-editor bg-background rounded-lg border border-input shadow-sm overflow-hidden">
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        placeholder={placeholder ?? "Write your post..."}
      />
    </div>
  );
};
