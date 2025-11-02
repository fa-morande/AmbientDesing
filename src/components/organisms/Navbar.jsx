import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg="white" variant="white" expand="sm">
        <Container>
            <Navbar.Brand href="/" className="navbar-brand">
                AmbientDesing
            </Navbar.Brand>
            <Nav className="nav-links">
                <Nav.Link href="/proyectos">Proyectos</Nav.Link>
                <Nav.Link href="/contacto">Contacto</Nav.Link>
                <Nav.Link href="/servicios">Servicios</Nav.Link>                    <Nav.Link href="/sobreLaMarca">Sobre la marca</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
    );
}

export default NavBar;
