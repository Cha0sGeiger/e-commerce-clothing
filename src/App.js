import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage';

const Hats = () => <div>Hats</div>;

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/hats" component={Hats} />
			</Switch>
		</div>
	);
}

export default App;
