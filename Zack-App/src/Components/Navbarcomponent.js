import React from 'react'; // Import the React library to use React features and components

// Import specific components from the react-bootstrap library
import Navbar from 'react-bootstrap/Navbar'; // Import the Navbar component from react-bootstrap
import Nav from "react-bootstrap/Nav"; // Import the Nav component from react-bootstrap
import Container from 'react-bootstrap/Container'; // Import the Container component from react-bootstrap

// Define a functional component named Navbarcomponent
function Navbarcomponent() {
  return (
    // Render a React Bootstrap Navbar component
    <Navbar bg="dark" data-bs-theme="dark"> {/* Set Navbar background color to dark */}
      <Container> {/* Wrap Navbar content in a Container for layout */}
        <Navbar.Brand href="#home">Navbar</Navbar.Brand> {/* Navbar Brand (logo) */}
        <Nav className="me-auto"> {/* Navbar links aligned to the left */}
          <Nav.Link href="#home">Home</Nav.Link> {/* Home link */}
          <Nav.Link href="#Contact">Contact</Nav.Link> {/* Contact link */}
          <Nav.Link href="#Aboutus">Aboutus</Nav.Link> {/* Aboutus link */}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbarcomponent; // Export Navbarcomponent as the default export