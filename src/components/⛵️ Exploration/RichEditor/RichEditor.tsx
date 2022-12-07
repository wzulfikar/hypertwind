import { useEditor, EditorContent } from "@tiptap/react";
import CharacterCount from "@tiptap/extension-character-count";
import StarterKit from "@tiptap/starter-kit";
import { cx } from "@twind/core";

import { Toolbar } from "./Toolbar";
import editorStyle from "./RichEditor.style";

const base = {
  container: `rounded-lg border border-gray-600`,
  toolbar: `overflow-auto`,
  editor: cx(
    `px-2 border-b border-t border-gray-600 min-h-[100px]`,
    editorStyle({ minHeight: "100px" })
  ),
  footer: `flex px-2 py-1 text-sm`,
};

type Props = {};

export const RichEditor = ({}: Props) => {
  const editor = useEditor({
    extensions: [StarterKit, CharacterCount],
    content: "<p>Hello World!</p>",
  });

  const wordCount = editor?.storage.characterCount.words();

  return (
    <div data-testid="rich-editor" className={base.container}>
      <div className={base.toolbar}>
        <Toolbar editor={editor} />
      </div>
      <div className={base.editor}>
        <EditorContent editor={editor} />
      </div>
      <div className={base.footer}>
        <span className={"ml-auto"}>{wordCount} words</span>
      </div>
    </div>
  );
};
