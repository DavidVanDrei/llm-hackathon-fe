import prisma from "@/lib/prisma"
import Link from "next/link"
import {Topic} from '../interfaces/index'

export default async function Subtopics({ topicId }: { topicId: string }) {
  let subnotes:Topic[] = []
  let id = parseInt(topicId)
  if (!Number.isNaN(id)) {
  subnotes = await prisma.topic.findMany({
    where: {
      superTopicId: id
    },
  })
}

  return (
    <ul className="menu w-56 flex-none rounded-box m-4">
      <li className="menu-title">
        <span>Subnotes</span>
      </li>
      {subnotes.map((note) => (
        <li key={note.id}>
          <Link href={`/${note.id}`}>{note.title}</Link>
        </li>
      ))}
      <li className='mt-4'><label htmlFor='add-note-modal' className='btn'>+</label></li>
    </ul>
  )
}
