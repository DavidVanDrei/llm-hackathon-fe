import RootNotes from "@/components/RootNotes";
import Note from "@/components/Note";
import Header from "./Header";

export default async function MentatMind({ user, topicId }: { user: any, topicId: string | null }) {
  console.log(topicId)

  return <>
    <Header user={user} />
    {topicId
      // @ts-expect-error Server Component

      ? <Note topicId={topicId} />
      // @ts-expect-error Server Component
      : <RootNotes />}
  </>
}
