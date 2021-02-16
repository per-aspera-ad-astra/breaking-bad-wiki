import CharacterItem from './CharacterItem'
import Spinner from '../UI/Spinner'

function CharacterGrid({ items, isLoading }) {
	return isLoading ? (
		<Spinner />
	) : (
		<section className="cards">
			{items.map(item => (
				<CharacterItem
					key={item.char_id}
					item={item}
				/>
			))}
		</section>
	)
}

export default CharacterGrid
