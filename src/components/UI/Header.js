import Navigation from './Navigation'

import logo from '../../assets/img/logo.png'

const Header = () => {
	return (
		<header className="header">
			<img className="logo" src={logo} alt="logo"/>
			<Navigation />
		</header>
	)
}

export default Header
