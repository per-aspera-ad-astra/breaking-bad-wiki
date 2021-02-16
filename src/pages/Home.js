import React from 'react'
import RandomCharacter from '../components/RandomCharacter'
import RandomQuote from '../components/RandomQuote'
import RandomDeath from '../components/RandomDeath'
import HomeImage from '../assets/img/home-image.jpg'

const Home = () => {
	return (
		<div className="home">
			<div className="home__img">
				<img src={HomeImage} alt=""/>
			</div>
			<div className="home-random">
				<RandomCharacter />
				<RandomQuote />
				<RandomDeath />
			</div>
		</div>
	)
}

export default Home
