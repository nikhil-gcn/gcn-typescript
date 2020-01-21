import React, { Component } from 'react';
import { A } from './a';
import Player_Web from './Player';

import '../styles/index.css';

class App extends Component {
	render() {
		return (
			<div>
				<h1>React Typescript</h1>
				<A />
				<Player_Web />
			</div>
		);
	}
}

export default App;
