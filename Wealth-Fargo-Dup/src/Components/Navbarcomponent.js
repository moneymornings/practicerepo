import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function Navbarcomponent() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">WEALTH FARGO</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#About us">About us</Nav.Link>
          <Nav.Link href="#Our Products">Our Products</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>
          <Nav.Link href="#Log In">Log In</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default Navbarcomponent