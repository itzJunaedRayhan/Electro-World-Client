import React from 'react';
import './Header.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="header">
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand className="brand"><Link to="/home">Electro World</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav className="items">
                        <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/orders">Orders</Link></Nav.Link>
                        <Nav.Link><Link to="/admin">Admin</Link></Nav.Link>
                        <Nav.Link className="login"><Link to="/login">Login</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;