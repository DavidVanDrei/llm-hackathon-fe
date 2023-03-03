'use client';

import React, { useState } from 'react';

import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

import dynamic from 'next/dynamic';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

export default function NoteCard({ markdownText }: { markdownText: string }) {
  const [inputText, setInputText] = useState(markdownText);

  return (
    <div className="mt-4" style={{ borderRadius: 0 }}>
      <MDEditor
        value={inputText}
        preview="edit"
        visiableDragbar={false}
        height={600}
        onChange={(str) => setInputText(str!)}
      />
    </div>
  );
}
