import RootNotes from "@/components/RootNotes";
import Note from "@/components/Note";
import Header from "./Header";


export default async function MentatMind({ user }: { user: any }) {
  //const topicPath = []
  const topicPath = ["Computer Science", "Algorithms", "Sorting"]

  return <>
    <Header user={user} />
    {topicPath.length === 0
      // @ts-expect-error Server Component
      ? <RootNotes />
      // @ts-expect-error Server Component
      : <Note topicPath={topicPath} />}
  </>
}
