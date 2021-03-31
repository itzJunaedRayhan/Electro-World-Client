import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import './Admin.css'
import AddProduct from '../AddProduct/AddProduct';
const Admin = () => {
    return (
        <div className="row">
            <div className="col-md-3 admin">
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand className="brand"><Link to="/home">Electro World</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    
                    <Nav className="admin-items">
                        <Nav.Link><Link to="/ManageProducts">Manage Product</Link></Nav.Link>
                        <Nav.Link><Link to="/admin">Add Products</Link></Nav.Link>
                        <Nav.Link><Link to="/EditProducts">Edit Products</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        <div className="col-md-8">
            <AddProduct/>
        </div>
        </div>
    );
};

export default Admin;