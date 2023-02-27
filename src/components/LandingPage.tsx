'use client'
import Link from 'next/link'
import Header from "@/components/Header"
import Image from 'next/image'

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>{/*</main>style={{ position: "absolute", top: "500px", height: "calc(100% - 500px)", width: "100%", backgroundColor: "white" }}*/}
        <div className="white-section bg-white absolute top-1/3 h-2/3 w-full" ></div>
        <div className="container max-w-5xl mx-auto mt-4">
          <div className="flex">
            <div className="flex">
              <div style={{ marginLeft: "0px", fontFamily: "Futura", textAlign: "center" }}>
                <h1 style={{ fontSize: "64px", fontWeight: "bold", marginBottom: "10px" }}>AI-Tutor</h1>
                <h2 style={{ fontSize: "48px" }}>Personal Knowledge Management</h2>
              </div>
            </div>
            <Image src="/lowfi.png" alt="My Image" width={600} height={400} style={{ width: '50%' }} />
          </div>
          <div className="flex justify-center">
            <div className="card w-96 m-4" style={{ backgroundImage: "url(/sticky.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover" }}>
              <div className="card-body" style={{ color: "black" }}>
                <h2 className="card-title">Muad Dib!</h2>
                <p>It is by will alone I set my mind in motion. It is by the juice of Sapho that thoughts acquire speed, the lips acquire stains, the stains become a warning. It is by will alone I set my mind in motion.</p>
                <div className="card-actions justify-center">
                  <Link href="/api/auth/login" target="_blank">
                    <button className="btn btn-primary bg-black">Sign Up</button>
                  </Link>
                </div>
                <div className="card-actions justify-center"></div>
              </div>
            </div>
            <div className="card w-96 m-4" style={{ backgroundImage: "url(/sticky.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover" }}>
              <div className="card-body" style={{ color: "black" }}>
                <h2 className="card-title">Duke!</h2>
                <p>Don&apos;t miss a single note with Mentat, powered by OpenAI Whisper and GPT.</p>
                <div className="card-actions justify-center" style={{paddingBottom: 48}}>
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
            <div className="card w-96 m-4" style={{ backgroundImage: "url(/sticky.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover" }}>
              <div className="card-body" style={{ color: "black" }}>
                <h2 className="card-title">Empire!</h2>
                <p>Check out the project on our LabLab.ai profile.</p>
                <div className="flex-none items-center" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 48 }}>
                  <Link aria-label="LabLab.ai" target="_blank" href="https://lablab.ai/event/openai-hackathon/kwisatz-haderach" rel="noopener" className="btn btn-ghost drawer-button btn-square normal-case">
                    <Image src="/lablab.png" alt="LabLab.ai Logo" width={1100} height={1100} style={{ width: "200%" }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
