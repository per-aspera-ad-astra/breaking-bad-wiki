import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CharacterItem from './characters/CharacterItem'
import Button from './UI/Button'
import Spinner from './UI/Spinner'

const RandomCharacter = () => {
	const [item, setItem] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchItems = async () => {
			const result = await axios(`https://www.breakingbadapi.com/api/character/random`)

			setItem(result.data[0])
			setIsLoading(false)
		}

		fetchItems()
	}, [])

	const getRandomCharacter = () => {
		console.log('There should be a random character!!')
	}

	return isLoading ? (
		<Spinner />
	) : (
		<section className="random random-character">
			<h2 className="random__title">Random character</h2>
			<CharacterItem
				item={item}
			/>
			<Button
				text={'Show another character'}
				onClick={getRandomCharacter}
			/>
		</section>
	)

}

export default RandomCharacter
