'use client'

import Link from 'next/link'
import Header from "@/components/Header"
import Image from 'next/image'

export default function LandingPage({ user }: { user: any }) {
  return (
    <div>
      <Header user={user} />
      <main className="flex flex-col" style={{ minHeight: 'calc(100vh - 64px)' }}>
        <div className="flex flex-row flex-wrap container max-w-5xl mx-auto mt-4" style={{ marginBottom: 128 }}>
          <div className="font-['Futura'] text-center w-full md:w-1/2">
            <h1 className="text-6xl font-bold mb-8 mt-4">AI-Tutor</h1>
            <h2 className="text-5xl">Personal Knowledge Management</h2>
          </div>
          <Image className="w-full md:w-1/2 mt-8 md:mt-0 p-4" src="/lowfi.png" alt="anime girl studying to lowfi" width={600} height={400} />
        </div>
        <div className="grow h-full bg-white">
          <div className="flex flex-wrap justify-center">
            <div className="card w-96 -top-24 h-96" style={{ backgroundImage: "url(/sticky.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover" }}>
              <div className="card-body" style={{ color: "black" }}>
                <h2 className="card-title">Muad Dib!</h2>
                <p>It is by will alone I set my mind in motion. It is by the juice of Sapho that thoughts acquire speed, the lips acquire stains, the stains become a warning. It is by will alone I set my mind in motion.</p>
                <div className="card-actions justify-center" style={{ paddingBottom: 64 }}>
                  <Link href="/api/auth/login" target="_blank">
                    <button className="btn btn-primary bg-black">Sign Up</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card w-96 -top-24 h-96" style={{ backgroundImage: "url(/sticky.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover" }}>
              <div className="card-body" style={{ color: "black" }}>
                <h2 className="card-title">Duke!</h2>
                <p>Don&apos;t miss a single note with Mentat, powered by OpenAI Whisper and GPT.</p>
                <div className="card-actions justify-center" style={{ paddingBottom: 64 }}>
                  <Link aria-label="OpenAI" target="_blank" href="https://platform.openai.com/docs/guides/embeddings/what-are-embeddings" rel="noopener" className="btn btn-ghost drawer-button btn-square normal-case">
                    <Image src="/openai.png" alt="My Image" width={1100} height={1100} style={{ width: "200%" }} />
                  </Link>
                  <Link aria-label="Zettelkasten" target="_blank" href="https://zettelkasten.de/posts/overview/" rel="noopener" className="btn btn-ghost drawer-button btn-square normal-case">
                    <Image src="/zk.png" alt="My Image" width={1100} height={1100} style={{ width: "200%" }} />
                  </Link>
                  <Link aria-label="Redis" target="_blank" href="https://github.com/openai/openai-cookbook/tree/main/examples/vector_databases/redis" rel="noopener" className="btn btn-ghost drawer-button btn-square normal-case">
                    <Image src="/redis.png" alt="My Image" width={1100} height={1100} style={{ width: "200%" }} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="card w-96 -top-24 h-96" style={{ backgroundImage: "url(/sticky.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover" }}>
              <div className="card-body" style={{ color: "black" }}>
                <h2 className="card-title">Empire!</h2>
                <p>Check out the project on our LabLab.ai profile.</p>
                <div className="flex-none items-center" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 64 }}>
                  <Link aria-label="LabLab.ai" target="_blank" href="https://lablab.ai/event/openai-hackathon/kwisatz-haderach" rel="noopener" className="btn btn-ghost drawer-button btn-square normal-case">
                    <Image src="/lablab.png" alt="LabLab.ai Logo" width={1100} height={1100} style={{ width: "200%" }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
