import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from './UI/Button'
import Spinner from './UI/Spinner'

const RandomDeath = () => {
	const [item, setItem] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchItems = async () => {
			const result = await axios(`https://www.breakingbadapi.com/api/random-death`)

			console.log(result.data)

			setItem(result.data)
			setIsLoading(false)
		}

		fetchItems()
	}, [])

	const getRandomDeath = () => {
		console.log('There should be a random death!!')
	}

	return isLoading ? (
		<Spinner />
	) : (
		<section className="random random-death">
			<h2 className="random__title">Random death</h2>
			<div className="random__body">
				<h3 className="grid-item__title">{item.death}</h3>
				<ul className="grid-item__list">
					<li><strong>Cause:</strong> {item.cause}</li>
					<li><strong>Number of deaths:</strong> {item.number_of_deaths}</li>
					<li><strong>Last words:</strong> {item.last_words}</li>
					<li><strong>Responsible:</strong> {item.responsible}</li>
					<li><strong>Episide:</strong> {item.episode}</li>
					<li><strong>Season:</strong> {item.season}</li>
				</ul>
			</div>
			<Button
				text={'Show another death'}
				onClick={getRandomDeath}
			/>
		</section>
	)
}

export default RandomDeath
