import LandingPage from "@/components/LandingPage"
import MentatMind from "@/components/MentatMind"
import { getUser } from "@/utils/auth"

export default async function Home() {
  const user = await getUser()

  return (user.email !== 'anonymous' || process.env.NODE_ENV === "development"
    // @ts-expect-error Server Component
    ? <MentatMind />
    : <LandingPage />
  )
}
