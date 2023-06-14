import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";

function CollapsibleExample() {
  return (
    <Navbar className='w-100' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <NavLink to="/">
          <Navbar.Brand>Ginóbili Torneos</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Requisitos</Nav.Link>
            <Nav.Link href="#pricing">Inscripciones</Nav.Link>
            <NavDropdown title="Información" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Lo que hay que saber</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Propósito
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Básquet</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Historia
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Más info</Nav.Link>
            <NavLink to="/login">
              <Nav.Link eventKey={2} href="#memes">
                Iniciar Sesión
              </Nav.Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;

