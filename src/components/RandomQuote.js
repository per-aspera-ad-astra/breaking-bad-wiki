import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from './UI/Button'
import Spinner from './UI/Spinner'

const RandomQuote = () => {
	const [item, setItem] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchItems = async () => {
			const result = await axios(`https://www.breakingbadapi.com/api/quote/random`)

			setItem(result.data[0])
			setIsLoading(false)
		}

		fetchItems()
	}, [])

	const getRandomQuote = () => {
		console.log('There should be a random quote!!')
	}

	return isLoading ? (
		<Spinner />
	) : (
		<section className="random random-quote">
			<h2 className="random__title">Random quote</h2>
			<div className="random__body">
				<blockquote>{item.quote}</blockquote>
				<strong>{item.author}</strong>
			</div>
			<Button
				text={'Show another quote'}
				onClick={getRandomQuote}
			/>
		</section>
	)
}

export default RandomQuote
