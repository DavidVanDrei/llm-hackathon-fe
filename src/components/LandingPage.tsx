'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function LandingPage() {
  return (
  
    // a paragraph left justified with large font for the first line and smaller font for the 2nd
    
      
      // <main className="mt-0 flex-grow">
      //     <Image src="/landing_page.png" alt="My Image" width={1520} height={800} layout="intrinsic" objectFit="cover" style={{ maxWidth: "80%" }} />
      // </main>
      // a paragraph left justified with large font for the first line and smaller font for the 2nd
      // <div>AI-Powered
      //   Personal Knowledge Management</div>
      <main className="mt-0 flex-grow justify-right">
        
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-center'}}>
            <div style={{ marginLeft: "0px", fontFamily: "Futura", textAlign: "center" }}>
              <h1 style={{ fontSize: "64px", fontWeight: "bold", marginBottom: "10px" }}>AI-Tutor</h1>
              <h2 style={{ fontSize: "48px" }}>Personal Knowledge Management</h2>
            </div>
          </div>
          
          <Image src="/lowfi.png" alt="My Image" width={600} height={400} layout="intrinsic" objectFit="cover" style={{ justify: 'right', width: '50%' }} />
        </div>
        <div className="white-section" style={{position: "absolute", top: "70%", height: "50%", width: "100%", backgroundColor: "white"}}></div>
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
              <p>Don't miss a single note with Mentat, powered by OpenAI Whisper and GPT.</p>
              <div className="card-actions justify-center">
                <Link aria-label="OpenAI" target="_blank" href="https://platform.openai.com/docs/guides/embeddings/what-are-embeddings" rel="noopener" className="btn btn-ghost drawer-button btn-square normal-case">
                  <Image src="/openai.png" alt="My Image" width={1100} height={1100} layout="intrinsic" objectFit="cover" style={{ width: "200%"}}/>
                </Link>
                <Link aria-label="Zettelkasten" target="_blank" href="https://zettelkasten.de/posts/overview/" rel="noopener" className="btn btn-ghost drawer-button btn-square normal-case">
                  <Image src="/zk.png" alt="My Image" width={1100} height={1100} layout="intrinsic" objectFit="cover" style={{ width: "200%"}}/>
                </Link>
                <Link aria-label="Redis" target="_blank" href="https://github.com/openai/openai-cookbook/tree/main/examples/vector_databases/redis" rel="noopener" className="btn btn-ghost drawer-button btn-square normal-case">
                  <Image src="/redis.png" alt="My Image" width={1100} height={1100} layout="intrinsic" objectFit="cover" style={{ width: "200%"}}/>
                </Link>
              </div>
              <div className="card-actions justify-center"></div>
            </div>
          </div>


          <div className="card w-96 m-4" style={{ backgroundImage: "url(/sticky.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover" }}>
            <div className="card-body" style={{ color: "black" }}>
              <h2 className="card-title">Empire!</h2>
              <p>Check out the project on our LabLab.ai profile.
              </p>
              <div className="flex-none items-center" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Link aria-label="LabLab.ai" target="_blank" href="https://lablab.ai/event/openai-hackathon/kwisatz-haderach" rel="noopener" className="btn btn-ghost drawer-button btn-square normal-case">
                  <Image src="/lablab.png" alt="My Image" width={1100} height={1100} layout="intrinsic" objectFit="cover" style={{ width: "200%"}}/>
                </Link>
              </div>

              
              <div className="card-actions justify-center">
                {/* <button className="btn btn-primary">Sign Up</button> */}
              </div>
              <div className="card-actions justify-center"></div>
            </div>
          </div>
          

        </div>
        
        
      </main>
  )
}
