import { Link } from 'react-router-dom'

const CharacterItem = ({ item }) => {
	return (
		<article className="card">
			<Link to={`/characters/${item.char_id}`}>
				<div className="card__inner">
					<div
						className="card__img"
					>
						<img src={item.img} alt={item.name}/>
					</div>
					<div className="card__description">
						<h2 className="card__title">{item.name}</h2>
						<p>{item.nickname}</p>
					</div>
				</div>
			</Link>
		</article>
	)
}

export default CharacterItem
