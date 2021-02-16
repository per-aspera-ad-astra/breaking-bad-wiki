import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DeathsGrid from '../components/deaths/DeathsGrid'

const Deaths = () => {
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchItems = async () => {
			const result = await axios(`https://www.breakingbadapi.com/api/deaths`)

			setItems(result.data)
			setIsLoading(false)
		}

		fetchItems()
	}, [])
	return (
		<>
			<DeathsGrid
				isLoading={isLoading}
				items={items}
			/>
		</>
	)
}

export default Deaths