import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
	return (
		<div>
			<Router>
				<Nav />
				<Switch></Switch>
			</Router>
		</div>
	);
}

export default App;
