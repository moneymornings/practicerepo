import React from 'react'
import Container from 'react-bootstrap/Container';
// import LinkContainer from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Toyota from './Toyota';
import Mercedes from './Mercedes';
import Lexus from './Lexus';



function Navbarcomponent() {

  <Router>
          <Switch>
          {/* <Route exact path="/" component ={Home}></Route> */}
          <Route path="/Toyota" component ={Toyota}></Route>
            {/* <Toyota/> */}
          <Route path="/Lexus" exact>
            <Lexus/>
          </Route>
          <Route path="/Mercedes" exact>
            <Mercedes />
          </Route>
        </Switch>
    </Router>

  return (
    <>
    <Router>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Toyota">Toyota</Nav.Link>
            <Nav.Link href="/Lexus">Lexus</Nav.Link>
            <Nav.Link href="/Mercedes">Mercedes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Router>
    
    </>
  );
}



    


export default Navbarcomponent