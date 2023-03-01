'use client'

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import dynamic from "next/dynamic";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);

export default function NoteCard({ markdownText }: { markdownText: string }) {
  return (
    <div className="mt-4" style={{ borderRadius: 0 }}>
        <MDEditor 
          value={markdownText}
          preview="preview"
          hideToolbar={true}
          visiableDragbar={false}
          height={600}
        />
    </div>
  );
}
