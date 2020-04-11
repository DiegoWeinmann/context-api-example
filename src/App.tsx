import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ItemsProvider } from './context/items.context';
import Nav from './components/Nav';
import ItemsPage from './pages/ItemsPage';
import CartPage from './pages/CartPage';

function App() {
	return (
		<div>
			<ItemsProvider>
				<Router>
					<Nav />
					<Switch>
						<Route
							exact
							path="/"
							render={(props) => <ItemsPage {...props} />}
						/>
						<Route
							exact
							path="/cart"
							render={(props) => <CartPage {...props} />}
						/>
					</Switch>
				</Router>
			</ItemsProvider>
		</div>
	);
}

export default App;
