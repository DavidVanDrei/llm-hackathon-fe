import { Configuration, OpenAIApi } from "openai";

import NoteEditor from "@/components/NoteEditor";
import prisma from "@/lib/prisma";

export default async function NoteMarkdown({ topicId, topicPath }: { topicId: string, topicPath: [number, string][] }) {
  const notes = await prisma.note.findMany({
    where: {
      topicId: parseInt(topicId)
    }
  })

  let noteText

  if (notes.length === 0) {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const topicPathString = topicPath.map(([topicId, title]) => title).join(" > ")
    const openai = new OpenAIApi(configuration);

    console.log(topicPathString)

    noteText = (await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Generate a consise markdown that provides an overview exploration of the topic path: ${topicPathString}\n\n`,
      max_tokens: 600
    })).data.choices[0].text;

    const topic = await prisma.note.create({
      data: {
        topicId: parseInt(topicId),
        title: "",
        body: noteText || ""
      }
    })
  } else {
    noteText = notes[0].body
  }

  return (
    <NoteEditor markdownText={noteText || ""} />
  )
}

