import prisma from '@/lib/prisma'

export async function POST(request: Request) {
  const topicDetails = await request.json()
  
  const topic = await prisma.topic.create({
    data: {
      title: topicDetails.title,
      superTopicId: (topicDetails.topicId as string | null) ? parseInt(topicDetails.topicId) : null,
    }
  })

  return (Response as any).json({ topicId: topic.id })
}