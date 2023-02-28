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
			body: JSON.stringify({ note: value })
		})
			.catch(error => console.error(error))
	}

	return (
		<div className='w-full self-end mb-8'>
			<textarea value={value} onChange={(e) => setValue(e.target.value)} className="w-full textarea textarea-bordered" />
			<button type="submit" onClick={handleSubmit}>Submit</button>
		</div>
	)
}
