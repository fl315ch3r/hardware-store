import React, {Component} from 'react';
import './App.css';
import ToolList from '../components/ToolList';
import {tools} from '../tools';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import NavBar from '../components/NavBar';
import UpperNavBar from '../components/UpperNavBar';


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
			<div>
				<UpperNavBar />
				<NavBar />
				<div className='container'>
					<ToolList  tools={filteredTools} />
				</div>
			</div>
		);
	}
}

export default App;