'use client'
import prisma from '../lib/prisma'
import { Note } from '../interfaces/index'
import { useState } from 'react'

export default function Input() {
  const [value,setValue] = useState("")


  return (
    <div className='w-full self-end mb-8'>

      <textarea  value={value} onChange={(e) => setValue(e.target.value)} className="w-full textarea textarea-bordered"></textarea>
      <button type="submit" onClick={handleSubmit}>Submit</button>

    </div>

  )
}
