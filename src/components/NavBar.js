import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">Un millon de ilusiones</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav-basic">
                    <Nav.Link href={`/category/${1}`}>Niñas</Nav.Link>
                    <Nav.Link href={`/category/${2}`}>Niños</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <Nav.Link href="/cart" >
                    <CartWidget />
                </Nav.Link>
            </Container>
            </Navbar>
    );
}

export default Navigation;