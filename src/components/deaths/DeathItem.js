const DeathItem = ({ item }) => {
	return (
		<article className="grid-item">
			<div className="grid-item__inner">
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
		</article>
	)
}

export default DeathItem