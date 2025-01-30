import React, { useEffect, useRef, useState } from "react";
// import { Editor, EditorContent  } from 'https://esm.sh/@tiptap/core';
// import StarterKit from 'https://esm.sh/@tiptap/starter-kit';
import Placeholder from 'https://esm.sh/@tiptap/extension-placeholder';
// import Paragraph from 'https://esm.sh/@tiptap/extension-paragraph';
// import Bold from 'https://esm.sh/@tiptap/extension-bold';
import Underline from 'https://esm.sh/@tiptap/extension-underline';
import Link from 'https://esm.sh/@tiptap/extension-link';
// import BulletList from 'https://esm.sh/@tiptap/extension-bullet-list';
// import OrderedList from 'https://esm.sh/@tiptap/extension-ordered-list';
// import ListItem from 'https://esm.sh/@tiptap/extension-list-item';
// import Blockquote from 'https://esm.sh/@tiptap/extension-blockquote';

import { Editor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
// import Placeholder from "@tiptap/extension-placeholder";
import Paragraph from "@tiptap/extension-paragraph";
import Bold from "@tiptap/extension-bold";
// import Underline from "@tiptap/extension-underline";
// import Link from "@tiptap/extension-link";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Blockquote from "@tiptap/extension-blockquote";

const AdvancedTextarea = () => {
    const editorRef = useRef(null);
  const [editor, setEditor] = useState(null);
  useEffect(() => {
    const newEditor = new Editor({
      extensions: [
        StarterKit.configure({ history: false }),
        Placeholder.configure({
          placeholder: "Add a message, if you’d like.",
          emptyNodeClass: "before:text-gray-500",
        }),
        Paragraph.configure({
          HTMLAttributes: {
            class: "text-inherit text-gray-800 dark:text-neutral-200",
          },
        }),
        Bold.configure({
          HTMLAttributes: {
            class: "font-bold",
          },
        }),
        Underline,
        Link.configure({
          HTMLAttributes: {
            class: "inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-white",
          },
        }),
        BulletList.configure({
          HTMLAttributes: {
            class: "list-disc list-inside text-gray-800 dark:text-white",
          },
        }),
        OrderedList.configure({
          HTMLAttributes: {
            class: "list-decimal list-inside text-gray-800 dark:text-white",
          },
        }),
        ListItem.configure({
          HTMLAttributes: {
            class: "marker:text-sm",
          },
        }),
        Blockquote.configure({
          HTMLAttributes: {
            class: "relative border-s-4 ps-4 sm:ps-6 dark:border-neutral-700 [&>p]:sm:text-lg",
          },
        }),
      ],
      editorProps: {
        attributes: {
          class: "relative min-h-40 p-3",
        },
      },
    });

    setEditor(newEditor);
    return () => newEditor.destroy();
  }, []);

  const handleAction = (command) => {
    if (editor) {
      command();
    }
  };
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
      {/* Toolbar */}
      <div className="sticky top-0 bg-white flex align-middle gap-x-0.5 border-b border-gray-200 p-2 dark:border-neutral-700">
        <button onClick={() => handleAction(() => editor.chain().focus().toggleBold().run())}>
          Bold
        </button>
        <button onClick={() => handleAction(() => editor.chain().focus().toggleItalic().run())}>
          Italic
        </button>
        <button onClick={() => handleAction(() => editor.chain().focus().toggleUnderline().run())}>
          Underline
        </button>
        <button onClick={() => handleAction(() => editor.chain().focus().toggleBulletList().run())}>
          Bullet List
        </button>
        <button onClick={() => handleAction(() => editor.chain().focus().toggleOrderedList().run())}>
          Ordered List
        </button>
      </div>
       {/* Editor Content */}
       <div ref={editorRef} className="p-3">
        {editor && <EditorContent editor={editor} />}
      </div>
    </div>
  )
}

export default AdvancedTextarea
