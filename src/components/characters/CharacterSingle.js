import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from '../UI/Spinner'

const CharacterSingle = ({id}) => {
	const [item, setItem] = useState({})
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchItem = async () => {
			const result = await axios(`https://www.breakingbadapi.com/api/characters/${id}`)

			console.log(result.data)
			setItem(result.data[0])
			setIsLoading(false)
		}

		fetchItem()
	}, [])

	return isLoading ? (
		<Spinner />
	) : (
		<section className="single-character">
			<div className="single-character__img">
				<img src={item.img} alt={item.name}/>
			</div>
			<div className="single-character__description">
				<h1 className="single-character__title">{item.name}</h1>
				<ul className="single-character__list">
					<li className="single-character__item">
						<strong>Nickname:</strong> {item.nickname}
					</li>
					<li className="single-character__item">
						<strong>Birthday:</strong> {item.birthday}
					</li>
					<li className="single-character__item">
						<strong>Occupation: </strong> {item.occupation.join(', ')}
					</li>
					<li className="single-character__item">
						<strong>Category:</strong> {item.category}
					</li>
					{
						item.appearance.length ?
							<li className="single-character__item">
								<strong>Breaking Bad Seasons:</strong> {item.appearance.join(', ')}
							</li> : null
					}
					{
						item.better_call_saul_appearance.length ?
							<li className="single-character__item">
								<strong>Better Call Soul Seasons:</strong> {item.better_call_saul_appearance.join(', ')}
							</li> : null
					}
					<li className="single-character__item">
						<strong>Status:</strong> {item.status}
					</li>
					<li className="single-character__item">
						<strong>Portrayed:</strong> {item.portrayed}
					</li>
				</ul>
			</div>

		</section>
	)
}

export default CharacterSingle
