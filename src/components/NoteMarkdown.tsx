import { Configuration, OpenAIApi } from "openai";

import NoteEditor from "@/components/NoteEditor";
import prisma from "@/lib/prisma";
import CreateEmbeddings from '@/lib/redis'
import {Note} from '../interfaces/index'

// function float32Buffer(arr: Array) {
//   return Buffer.from(new Float32Array(arr).buffer);
// }


export default async function NoteMarkdown({ topicId, topicPath }: { topicId: string, topicPath: [number, string][] }) {
  let notes: Note[]= [];
  console.log(topicId)
  if (!Number.isNaN(topicId)) {

   notes = await prisma.note.findMany({
    where: {
      topicId: parseInt(topicId)
    }
  })
}

  let noteText;
  if (notes.length === 0) {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const topicPathString = topicPath.map(([topicId, title]) => title).join(" > ")
    const openai = new OpenAIApi(configuration);

    console.log(topicPathString)

    noteText = (await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Generate a concise markdown that provides an overview exploration of the topic path: ${topicPathString}\n\n`,
      max_tokens: 600
    })).data.choices[0].text
    console.log("text",noteText)
    const note = await prisma.note.create({
      data: {
        topicId: parseInt(topicId),
        title: "",
        body: noteText || ""
      }
    })
    const id = String(note.id)
    const text = note.body

    // const embed = Promise.resolve(CreateEmbeddings)
    // Promise.all([embed]).then((values) => {
    //   console.log(values[0].CreateEmbeddings());
    // });


  } else {
    noteText = notes[0].body
  }

  return (
    <NoteEditor markdownText={noteText || ""} />
  )
}

