import prisma from '../../lib/prisma'
import { Note } from '../../interfaces/index'


export async function POST(request: Request) {
  // TODO messaging service

  const body = await request.json()
  const title = 'Testerson'

  const data = {
    title: title,
    body: body.note,
  }
  const topic = await prisma.note.create({
    data: data,
  })

  return (Response as any).json({ message: 'Hello World' })
}