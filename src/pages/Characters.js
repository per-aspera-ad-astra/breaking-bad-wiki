import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from '../components/UI/Search'
import CharacterGrid from '../components/characters/CharacterGrid'

const Characters = () => {
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [query, setQuery] = useState('')

	useEffect(() => {
		const fetchItems = async () => {
			const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

			console.log(result.data)

			// setItems(result.data.filter(item => (
			// 	item.category === 'Breaking Bad'
			// )))
			setItems(result.data)
			setIsLoading(false)
		}

		fetchItems()
	}, [query])
	return (
		<>
			<Search getQuery={(q) => setQuery(q)}/>
			<CharacterGrid
				isLoading={isLoading}
				items={items}
			/>
		</>
	)
}

export default Characters
