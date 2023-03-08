'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function AddNoteModal({ topicId }: { topicId: string | null }) {
  const [title, setTitle] = useState('')
  const [guidance, setGuidance] = useState('')
  const router = useRouter()

  const handleSubmit = () => {
    fetch('/topic', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        guidance: guidance,
        topicId
      })
    })
      .then(response => response.json())
      // .then(data => router.push(`/${data.topicId}`))
      .catch(error => console.error(error))
  }

  return (
    <>
      <input type="checkbox" id="add-note-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="add-note-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">Create note</h3>
          <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" className="input input-bordered w-full my-6" />
          <textarea value={guidance} onChange={(e) => setGuidance(e.target.value)} className="textarea w-full input-bordered" placeholder="Additional LLM guidance (optional)"></textarea>
          <div className="modal-action">
            <label htmlFor='add-note-modal' onClick={handleSubmit} className="btn">Create</label>
          </div>
        </div>
      </div>
    </>
  )
}
