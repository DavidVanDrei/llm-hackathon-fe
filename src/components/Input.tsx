'use client'

import { useState } from 'react'

export default function Input() {
  const [value, setValue] = useState("")

  const handleSubmit = () => {
    fetch('/note', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ guidance: value })
    })
      .catch(error => console.error(error))
  }

  return (
    <div className='flex flex-col w-full mt-8'>
      <textarea placeholder={"Direct AI to change or add to the note."} value={value} onChange={(e) => setValue(e.target.value)} className="w-full textarea textarea-bordered" />
      <div className="w-full flex flex-row-reverse">
        <button className="btn mt-2" type="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}
