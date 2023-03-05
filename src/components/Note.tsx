import NoteBreadcrumbs from "@/components/NoteBreadcrumbs";
import NoteEditor from "@/components/NoteEditor";
import SimilarityList from "./SimilarityList";
import Subnotes from "./Subnotes";
import Input from "./Input";
import prisma from "@/lib/prisma";
import NoteMarkdown from "./NoteMarkdown";

export default async function Note({ topicId }: { topicId: string }) {
  const topicPath: [number, string][] = []

  async function getTopicPath(topicId: number) {
    let topic
    console.log("HAHAHHA",topicId)
    if(!Number.isNaN(topicId)){
     topic = await prisma.topic.findUnique({
      where: {
        id: topicId
      }
    })
  }
    console.log("E+UHCDUBEDI",topic)
    if (topic) {
      topicPath.push([topic.id, topic.title])
      if (topic.superTopicId) {
        await getTopicPath(topic.superTopicId)
      }
    }
  }

  await getTopicPath(parseInt(topicId))
  topicPath.reverse()

  return (
    <main className='flex container justify-center mx-auto mt-8'>
      {/* @ts-expect-error Server Component */}
      <SimilarityList topicId={topicId} />
      <div className="grow">
        {/* <NoteBreadcrumbs topicPath={topicPath} /> */}
        {/* @ts-expect-error Server Component */}
        <NoteMarkdown topicId={topicId} topicPath={topicPath} />
        <Input />
      </div>
      {/* @ts-expect-error Server Component */}
      <Subnotes topicId={topicId} />
    </main>
  )
}
