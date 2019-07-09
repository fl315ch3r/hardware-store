import React from 'react';
import './NavBar.css';
import logo from '../resources/img/terran-logo.jpg';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

const NavBar = () =>{
	return(
		<div>
		<div className="container">
			<img src={logo} className='img-logo' />
		</div>
		<div className='nav-menu' >
		<Navbar className='container' expand="lg"  variant="dark"  >
		  <Navbar.Brand href="#home"></Navbar.Brand>
		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
		  <Navbar.Collapse id="basic-navbar-nav">
		    <Nav className="mr-auto">
		      <NavDropdown title="Herramientas Eléctricas" id="basic-nav-dropdown1">
		        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
		        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
		        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
		        <NavDropdown.Divider />
		        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
		      </NavDropdown>
		      <NavDropdown title="Herramientas Manuales" id="basic-nav-dropdown2">
		        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
		        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
		        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
		        <NavDropdown.Divider />
		        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
		      </NavDropdown>
		      <NavDropdown title="Marcas" id="basic-nav-dropdown3">
		        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
		        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
		        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
		        <NavDropdown.Divider />
		        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
		      </NavDropdown>
		    </Nav>
		    <Form inline>
		      <FormControl type="text" placeholder="Buscar..." className="mr-sm-2" />
		      <Button variant="outline-light">Buscar</Button>
		    </Form>
		  </Navbar.Collapse>
		</Navbar>
		</div>
		</div>
	)
};

export default NavBar;