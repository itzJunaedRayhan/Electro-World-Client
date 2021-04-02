import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faThLarge, faPlus, faEdit} from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div className="col-md-3 admin">
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand className="brand"><Link to="/home">Electro World</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="admin-items">
                        <Nav.Link><Link to="/manageProducts"><FontAwesomeIcon className="icon" icon={faThLarge} /> Manage Product</Link></Nav.Link>
                        <Nav.Link><Link to="/addProducts"><FontAwesomeIcon className="icon" icon={faPlus} /> Add Products</Link></Nav.Link>
                        <Nav.Link><Link to="/EditProducts"><FontAwesomeIcon className="icon" icon={faEdit} /> Edit Products</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Sidebar;