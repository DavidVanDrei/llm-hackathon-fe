import AddNoteModal from "@/components/AddNoteModal"
import LandingPage from "@/components/LandingPage"
import MentatMind from "@/components/MentatMind"
import { getUser } from "@/utils/auth"

export default async function Home({ params: { slug } }: { params: { slug: string } }) {
  const user = await getUser()
  console.log("slug",slug)
  const dev = process.env.NODE_ENV === "development"
  return (
    <>
      {user.email !== 'anonymous' || dev
        ? <MentatMind user={dev ? { email: 'dev' } : user} topicId={slug} />
        : <LandingPage user={user} />}
      <AddNoteModal topicId={slug} />
    </>
  )
}
