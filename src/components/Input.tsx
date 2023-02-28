'use client'

import { useState } from 'react'

export default function Input() {
	const [value, setValue] = useState("")

	const handleSubmit = () => {
		fetch('/message', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ message: value })
		})
			.then(response => console.log(response.json()))
			.catch(error => console.error(error))
	}

	return (
		<div className='w-full self-end mb-8'>
			<textarea value={value} onChange={(e) => setValue(e.target.value)} className="w-full textarea textarea-bordered" />
			<button type="submit" onClick={handleSubmit}>Submit</button>
		</div>
	)
}
