import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom'
import Header from './components/UI/Header'
import Footer from './components/UI/Footer'
import CharacterSingle from './components/characters/CharacterSingle'
import Home from './pages/Home'
import Characters from './pages/Characters'
import Episodes from './pages/Episodes'
import Quotes from './pages/Quotes'
import Deaths from './pages/Deaths'
import './App.scss'

const App = () => {

	return (
		<Router>
			<div className="container">
				<Header />
				<main className="main">
					<Switch>
						<Route
							exact
							path="/"
							component={Home}
						/>
						<Route
							exact
							path="/characters"
							component={Characters}
						/>
						<Route
							path="/characters/:id"
							render={({match}) => {
								const { id } = match.params
								return <CharacterSingle id={id}/>
							}}
						/>
						<Route path="/episodes">
							<Episodes />
						</Route>
						<Route path="/quotes">
							<Quotes />
						</Route>
						<Route path="/deaths">
							<Deaths />
						</Route>
					</Switch>
				</main>
				<Footer />
			</div>
		</Router>

	)
}

export default App
