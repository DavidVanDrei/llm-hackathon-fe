import LandingPage from "@/components/LandingPage"
import MentatMind from "@/components/MentatMind"
import { getUser } from "@/utils/auth"

export default async function Home() {
  const user = await getUser()
  const dev = process.env.NODE_ENV === "development"

  return (user.email !== 'anonymous' || dev
    // @ts-expect-error Server Component
    ? <MentatMind user={dev ? { email: 'dev' } : user} />
    : <LandingPage user={user} />
  )
}
