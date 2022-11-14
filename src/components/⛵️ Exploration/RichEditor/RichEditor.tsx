import { css } from "twind/css"
import { useEditor, EditorContent } from "@tiptap/react"
import CharacterCount from "@tiptap/extension-character-count"
import StarterKit from "@tiptap/starter-kit"
import { apply, tw } from "@components/util"

import { Toolbar } from "./Toolbar"
import editorStyle from "./RichEditor.style"

const base = {
  container: apply`rounded-lg border border-gray-600`,
  toolbar: apply`overflow-auto`,
  editor: css(
    apply`px-2 border-b border-t border-gray-600 min-h-[100px]`,
    editorStyle({ minHeight: "100px" })
  ),
  footer: apply`flex px-2 py-1 text-sm`,
}

type Props = {}

export const RichEditor = ({}: Props) => {
  const editor = useEditor({
    extensions: [StarterKit, CharacterCount],
    content: "<p>Hello World!</p>",
  })

  const wordCount = editor?.storage.characterCount.words()

  return (
    <div data-testid="rich-editor" className={tw(base.container)}>
      <div className={tw(base.toolbar)}>
        <Toolbar editor={editor} />
      </div>
      <div className={tw(base.editor)}>
        <EditorContent editor={editor} />
      </div>
      <div className={tw(base.footer)}>
        <span className={tw("ml-auto")}>{wordCount} words</span>
      </div>
    </div>
  )
}
