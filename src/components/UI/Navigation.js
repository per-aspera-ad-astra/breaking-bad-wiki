import { NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<nav className="navigation">
			<ul className="navigation__list">
				<li className="navigation__item">
					<NavLink exact to="/">Home</NavLink>
				</li>
				<li className="navigation__item">
					<NavLink to="/characters">Characters</NavLink>
				</li>
				<li className="navigation__item">
					<NavLink to="/episodes">Episodes</NavLink>
				</li>
				<li className="navigation__item">
					<NavLink to="/quotes">Quotes</NavLink>
				</li>
				<li className="navigation__item">
					<NavLink to="/deaths">Deaths</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
