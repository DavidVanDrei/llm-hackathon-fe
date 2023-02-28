'use client';

// const removeImports = require('next-remove-imports')();
// module.exports = removeImports({});

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);

export default function NoteCard() {
  const [value, setValue] = useState("**Hello world!!!**");
  return (
    <div className="card bg-[#F4F4F4] h-96 m-8 mx-auto" style={{ width: 800, borderRadius: 0 }}>
      <div className="card-body">
        <h2 className="card-title text-[#333333] font-bold text-lg">Title</h2>
        <MDEditor value={value} onChange={setValue} />
      </div>
    </div>
  );
}
