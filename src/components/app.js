import  React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './header';
import Home from './home';
import About from './about';
import Services from './services'
import Contact from './contact'
import Success from './success'
import Footer from './footer'


export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	render() {
		return (
			<Router>
				<div>
				<Header />
				<Route exact path="/" component={Home}/>
				<Route path="/about/"  component={About} />
				<Route path="/services/"  component={Services} />
				<Route path="/contact/" component={Contact} />
				<Route path="/success/" component={Success} />
				<Footer />
				</div>
			</Router>
		);
	}
}
