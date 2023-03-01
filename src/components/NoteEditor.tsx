'use client';

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);

const tempText = `# Sorting Algorithms

Sorting algorithms are a fundamental part of computer science that enable the efficient organization of data. They are used in a variety of applications, from sorting a list of names alphabetically to optimizing query results for a search engine. Sorting algorithms can be divided into two main categories: comparison-based sort algorithms and non-comparison-based sort algorithms.

Comparison-based sorting algorithms, such as Bubble Sort, Selection Sort, and Insertion Sort, work by comparing pairs of elements in an array and swapping them if they are not in the desired order. These algorithms are very efficient in terms of time complexity, but they can be limited in terms of space complexity. 

Non-comparison-based sorting algorithms, such as Counting Sort and Radix Sort, operate in linear time and do not require comparisons between elements. These algorithms are very efficient with respect to space, but they can be limited in terms of time complexity.

The choice of sorting algorithm depends on the application and the data set. Some algorithms, such as Merge Sort and Quick Sort, are versatile and can be used in many different applications. It is important to understand the trade-offs between different sorting algorithms in order to choose`

export default function NoteCard({ topicPath }: { topicPath: string[] }) {
  const [value, setValue] = useState<string>(tempText);
  return (
    <div className="mt-4" style={{ borderRadius: 0 }}>
        <MDEditor 
          value={value}
          onChange={(str) => setValue(str!)}
          preview="preview"
          visibleDragbar={false}
          height={600}
        />
    </div>
  );
}
