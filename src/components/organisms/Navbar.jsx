import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="/" className="navbar-brand">
    Mi Portafolio
</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="/proyectos">Proyectos</Nav.Link>
                <Nav.Link href="/contacto">Contacto</Nav.Link>
                <Nav.Link href="/servicios">Noticias</Nav.Link>
                <Nav.Link href="/sobreLaMarca">Sobre la marca</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavBar;
