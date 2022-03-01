import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <div className="navbar-brand">
                    <Link to="/" style={{textAlign:"center",textDecoration:"none", display:"inline-block", color:"white"}}>Un millon de ilusiones</Link>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav-basic">
                    <Link to={`/category/${1}`} style={{textAlign:"center",textDecoration:"none", display:"inline-block", color:"white", marginLeft:"15px"}}>Niñas</Link>
                    <Link to={`/category/${2}`} style={{textAlign:"center",textDecoration:"none", display:"inline-block", color:"white", marginLeft:"15px"}}>Niños</Link>
                </Nav>
                </Navbar.Collapse>
                <Nav.Link to="/cart" >
                    <CartWidget />
                </Nav.Link>
            </Container>
            </Navbar>
    );
}

export default Navigation;