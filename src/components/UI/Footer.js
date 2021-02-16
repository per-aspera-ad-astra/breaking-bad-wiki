import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Footer = () => {
	const [characters, setCharacters] = useState(0)
	const [episodes, setEpisodes] = useState(0)
	const [quotes, setQuotes] = useState(0)
	const [deaths, setDeaths] = useState(0)
	// const [isLoadingCharacters, setIsLoadingCharacters] = useState(true)
	// const [isLoadingEpisodes, setIsLoadingEpisodes] = useState(true)
	// const [isLoadingQuotes, setIsLoadingQuotes] = useState(true)
	// const [isLoadingDeaths, setIsLoadingDeaths] = useState(true)

	useEffect(() => {
		const fetchCharacters = async () => {
			const result = await axios(`https://www.breakingbadapi.com/api/characters`)

			setCharacters(result.data.length)
			// setIsLoadingCharacters(false)
		}

		const fetchQuotes = async () => {
			const result = await axios(`https://www.breakingbadapi.com/api/quotes`)

			setQuotes(result.data.length)
			// setIsLoadingQuotes(false)
		}

		const fetchEpisodes = async () => {
			const result = await axios(`https://www.breakingbadapi.com/api/episodes`)

			setEpisodes(result.data.length)
			// setIsLoadingEpisodes(false)
		}

		const fetchDeaths = async () => {
			const result = await axios(`https://www.breakingbadapi.com/api/death-count`)

			setDeaths(result.data[0].deathCount)
			// setIsLoadingDeaths(false)
		}

		fetchCharacters()
		fetchEpisodes()
		fetchQuotes()
		fetchDeaths()
	}, [])

	return (
		<footer className="footer">
			<div className="footer__item">Characters: {characters}</div>
			<div className="footer__item">Episodes: {episodes}</div>
			<div className="footer__item">Quotes: {quotes}</div>
			<div className="footer__item">Deaths: {deaths}</div>
		</footer>
	)
}

export default Footer
