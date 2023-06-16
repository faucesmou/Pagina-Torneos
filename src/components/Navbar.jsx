/* import React from 'react' */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

//Estas 3 importaciones son para hacer condicional un botón de iniciar sesion/cerrar sesión:

import React, { /* useState, */ useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function CollapsibleExample() {
  const state = useSelector((state) => state);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  // Lógica para cerrar sesión
  function handleLogout() {
    // Cambiar el estado global de redux a "false"
    dispatch({ type: "LOGOUT" });
  }

  return (
    <Navbar
      className="w-100"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <NavLink to="/">
          <Navbar.Brand>Ginóbili Torneos</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/novedades">
              <Nav.Link href="#features">Novedades</Nav.Link>
            </NavLink>
            <NavLink to="/inscripciones">
              <Nav.Link href="#pricing">Inscripciones</Nav.Link>
            </NavLink>
            <NavDropdown title="Información" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Lo que hay que saber
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Propósito</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Básquet</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Historia</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavLink to="/perfil">
              <Nav.Link href="#deets">Perfil</Nav.Link>
            </NavLink>
            <NavLink to="/login">
              <Nav.Link eventKey={2} href="#memes" onClick={handleLogout}>
                {isLoggedIn ? "Cerrar Sesión" : "Iniciar Sesión"}
              </Nav.Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
