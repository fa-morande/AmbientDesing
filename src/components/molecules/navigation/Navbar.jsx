import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importante para evitar recargas
import { appRoutes } from '@/routes/Config';

function NavBar() {
    // Filtramos para no mostrar la ruta "*" (Not Found) en el menú
    // y solo aquellas que tengan un label definido
    const menuRoutes = appRoutes.filter(route => route.path !== "*" && route.label);

    return (
        <Navbar bg="white" variant="light" expand="sm" className="shadow-sm">
            <Container>
                {/* Usamos as={Link} para que Bootstrap use el enrutador interno */}
                <Navbar.Brand as={Link} to="/" className="navbar-brand">
                    AmbientDesign
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav-links">
                        {menuRoutes.map((route) => (
                            <Nav.Link 
                                key={route.path} 
                                as={Link} 
                                to={route.path}
                            >
                                {route.label}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;