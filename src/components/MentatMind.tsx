import RootNotes from "@/components/RootNotes";
import Note from "@/components/Note";
import Header from "./Header";

export default function MentatMind({ user, topicId }: { user: any, topicId: string | null }) {
  console.log("HERE",topicId)

  return <>
    <Header user={user} />
    {topicId
      // @ts-expect-error Server Component

      ? <Note topicId={topicId} />
      // @ts-expect-error Server Component
      : <RootNotes />}
  </>
}
