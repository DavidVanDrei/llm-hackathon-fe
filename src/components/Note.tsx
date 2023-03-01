import NoteBreadcrumbs from "@/components/NoteBreadcrumbs";
import NoteEditor from "@/components/NoteEditor";
import SimilarityList from "./SimilarityList";
import Subnotes from "./Subnotes";
import Input from "./Input";

export default async function Note({ topicPath }: { topicPath: string[] }) {
  return (
    <main className='flex container justify-center mx-auto mt-8'>
      {/* @ts-expect-error Server Component */}
      <SimilarityList />
      <div className="grow">
        <NoteBreadcrumbs topicPath={topicPath} />
        <NoteEditor topicPath={topicPath} />
        <Input />
      </div>
      {/* @ts-expect-error Server Component */}
      <Subnotes />
    </main>
  )
}
