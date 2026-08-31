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

  // Detects Word / Google Docs heading markup on paste and converts it to real
  // heading tags so SEO formatting done in the source doc is preserved.
  const wordHeadingMatcher = useCallback((node: any, delta: any) => {
    try {
      const el = node as HTMLElement;
      if (!el || el.nodeType !== 1) return delta;

      const cls = (el.className || "").toString().toLowerCase();
      const style = el.getAttribute?.("style") || "";
      let level = 0;

      // Word: class="MsoHeading1" / "MsoTitle"; style="mso-outline-level:1"
      const msoClass = cls.match(/mso(?:heading|list)?h?(?:eading)?\s*([1-6])/) || cls.match(/heading\s*([1-6])/);
      if (cls.includes("msotitle")) level = 1;
      else if (msoClass) level = parseInt(msoClass[1], 10);

      const outline = style.match(/mso-outline-level:\s*([1-6])/i);
      if (!level && outline) level = parseInt(outline[1], 10);

      // Google Docs / generic: bold paragraph with a large font-size
      if (!level) {
        const size = style.match(/font-size:\s*([\d.]+)pt/i);
        const bold = /font-weight:\s*(bold|[6-9]00)/i.test(style) || !!el.querySelector?.("b,strong");
        if (size && bold) {
          const pt = parseFloat(size[1]);
          if (pt >= 24) level = 1;
          else if (pt >= 18) level = 2;
          else if (pt >= 15) level = 3;
          else if (pt >= 13) level = 4;
        }
      }

      if (level >= 1 && level <= 6 && delta?.ops?.length) {
        delta.ops.forEach((op: any) => {
          op.attributes = { ...(op.attributes || {}), header: level };
        });
      }
      return delta;
    } catch {
      return delta;
    }
  }, []);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image", "code-block"],
          [{ align: [] }],
          ["clean"],
        ],
        handlers: { image: imageHandler },
      },
      clipboard: {
        matchVisual: false,
        matchers: [
          ["p", wordHeadingMatcher],
          ["div", wordHeadingMatcher],
        ] as any,
      },
    }),
    [imageHandler, wordHeadingMatcher],
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
