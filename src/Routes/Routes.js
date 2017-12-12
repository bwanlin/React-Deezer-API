import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../Pages/Home'
import SearchResults from '../Pages/SearchResults'

export class Routes extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/artist/:name" component={SearchResults} />
					<Route path="/" component={Home} />
					<Route render ={ () => {
						return <p>You're lost.</p>
					}} />
				</Switch>
			</Router>
			)
	}
}
