import AddNoteModal from "@/components/AddNoteModal"
import LandingPage from "@/components/LandingPage"
import MentatMind from "@/components/MentatMind"
import { getUser } from "@/utils/auth"

export default async function Home({ params: { slug } }: { params: { slug: string } }) {
  const user = await getUser()
  return (
    <>
     <MentatMind user={user} topicId={slug} />
    <AddNoteModal topicId={slug} />
    </>
  )
}
