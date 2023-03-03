import Link from "next/link";
import { Note } from '../interfaces/index'
import RedisClient from "@/lib/redis";


export default async function SimilarityList() {
  const redis = Promise.resolve(RedisClient)


  // const fetchNotes = async ()=> {
  //   return await prisma.note.findMany()
  //   }
  // const notes:Note[] = await fetchNotes()

  return (
    <ul className="menu w-56 flex-none rounded-box m-4">
      <li className="menu-title">
        <span>Related Notes</span>
      </li>
      {/* {notes.map((note) => (
        <li key={note.id}>
          <h3>{note.title}</h3>
        </li>
      ))} */}
      <li><a>Dynamic Programming</a></li>
      <li><a>Bubble Sort</a></li>
      <li><a>Merge Sort</a></li>
    </ul>
  )
}
