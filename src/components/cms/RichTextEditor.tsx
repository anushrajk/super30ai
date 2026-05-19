import { useMemo } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

interface Props {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

export const RichTextEditor = ({ value, onChange, placeholder }: Props) => {
  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [2, 3, 4, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image", "code-block"],
        [{ align: [] }],
        ["clean"],
      ],
    }),
    [],
  );

  return (
    <div className="bg-background rounded-md border border-input">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        placeholder={placeholder ?? "Write your post..."}
      />
    </div>
  );
};