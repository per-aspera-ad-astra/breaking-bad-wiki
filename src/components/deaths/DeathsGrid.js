import DeathItem from './DeathItem'
import Spinner from '../UI/Spinner'

function DeathsGrid({ items, isLoading }) {
	return isLoading ? (
		<Spinner />
	) : (
		<section className="grid">
			{items.map(item => (
				<DeathItem
					key={item.death_id}
					item={item}
				/>
			))}
		</section>
	)
}

export default DeathsGrid