import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Episodes = () => {
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchItems = async () => {
			const result = await axios(`https://www.breakingbadapi.com/api/episodes`)

			console.log(result.data)

			setItems(result.data)
			setIsLoading(false)
		}

		fetchItems()
	}, [])
	return (
		<section className="grid">
			Episodes
		</section>
	)
}

export default Episodes
