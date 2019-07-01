import React from 'react';
import './App.css';
import ToolList from './ToolList';
import {tools} from './tools';
import logo from './resources/img/terran-logo.jpg';

const App = () => {
	return(
		<div>
			<img src={logo} className='img-logo' />

			<ToolList tools={tools} />
		</div>
	)
}

export default App;