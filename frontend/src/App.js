import React, {Component} from 'react';
import './App.css';
import ToolList from './ToolList';
import {tools} from './tools';
import SearchBox from './SearchBox';
import logo from './resources/img/terran-logo.jpg';


class App extends Component {
	constructor(){
		super();
		this.state ={
			tools: tools,
			searchfield: ''
		}
	}
	onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value});
	}
	render(){
		const filteredTools = this.state.tools.filter(tool =>{
			return tool.description.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		return(
			<div className='tc'>
				<img src={logo} className='img-logo' />
				<SearchBox searchChange={this.onSearchChange} />

				<ToolList tools={filteredTools} />
			</div>
		);
	}
}

export default App;