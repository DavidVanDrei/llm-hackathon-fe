import 'server-only'

import { Topic } from '@/interfaces'
import prisma from '../lib/prisma'
import Link from 'next/link'

export default async function RootNotes() {
  const rootTopics: Topic[] = await prisma.topic.findMany({
    where: {
      superTopicId: null
    }
  })

  return (
    <main className="container mx-auto">
      <ul className="menu mx-auto bg-base-100 w-96 p-2 mt-8 rounded-box">
        <li className="menu-title">
          <span>Root Notes</span>
        </li>
        {rootTopics.map(topic =>
          <li key={`root-${topic.id}`}><Link href={`/${topic.id}`} >{topic.title}</Link></li>
        )}
        <li className='mt-4'><label htmlFor='add-note-modal' className='btn'>+</label></li>
      </ul>
    </main>
  )
}
