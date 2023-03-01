
export default async function RootNotes() {
  // TODO: Get root topics from postgres
  const rootTopics = ["Computer Science", "Synthetic Biology", "Law"]


  return (
    <main className="container mx-auto">
      <div>
        <ul className="menu bg-base-100 w-56 p-2 mt-8 rounded-box">
          <li className="menu-title">
            <span>Root Notes</span>
          </li>
          {rootTopics.map(topic =>
            <li key={`root-${topic}`}><a>{topic}</a></li>
          )}
          <li><a>+</a></li>
        </ul>
      </div>
    </main>
  )
}
