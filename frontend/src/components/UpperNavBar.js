import React from 'react';
import './UpperNavBar.css';
import {Navbar, Nav} from 'react-bootstrap';
import phoneIcon from '../resources/img/phone-icon.png';

const UpperNavBar = () =>{
	return(
		<div className="dark-bg">
		<Nav bg="dark" className="upper-nav container" activeKey="/home">
		    <Nav.Item>
		      <Nav.Link href="/home"><img src={phoneIcon} className="phone-img"/>4223 3841 - 4224 1748</Nav.Link>
		    </Nav.Item>
		    <Nav.Item>
		      <Nav.Link eventKey="link-1">Ubicación</Nav.Link>
		    </Nav.Item>
		    <Nav.Item>
		      <Nav.Link eventKey="link-2">Contacto</Nav.Link>
		    </Nav.Item>
		    <Nav.Item>
		      <Nav.Link eventKey="disabled" disabled>
		        Iniciar sesión
		      </Nav.Link>
		    </Nav.Item>
		 </Nav>
		 </div>
	)
}

export default UpperNavBar;