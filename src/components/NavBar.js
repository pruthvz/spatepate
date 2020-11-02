import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";

// Importing all pages below
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import PageDeleted from "./Pagedeleted";

// languages
import Java from "./subpages/Java";
import Javascript from "./subpages/Javascript";
import Developers from "./subpages/Developers";
import Resource from "./subpages/Resources";

// Navbar Function, with all the dropdowns and links. 
function navBar() {
  return (
    // page router. React bootstrap navbar.
    <Router>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar-custom"
        variant="dark"
      >
        <Navbar.Brand href="/">spatepate</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Languages" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/language/java">Java</NavDropdown.Item>
              <NavDropdown.Item href="/language/javascript">
                Javascript
              </NavDropdown.Item>
              <NavDropdown.Item href="/language/python">
                Python
              </NavDropdown.Item>
              <NavDropdown.Item href="/language/c#">C# Unity</NavDropdown.Item>
              <NavDropdown.Item href="/language/html-css">
                HTML/CSS
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="/developers">
                Cool Developers
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/about-us">About</Nav.Link>
            <Nav.Link href="/contact-us">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/resources">Resources</Nav.Link>
            <Nav.Link eventKey={2} href="https://www.reddit.com/r/dankmemes/" target="_blank"  rel="noopener noreferrer">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


        {/* Page redirection. */}
      <Switch>
        {/* Home page */}
        <Route exact path="/">
          <Home />
        </Route>
        {/* About page */}
        <Route path="/about-us">
          <About />
        </Route>
        {/* Contact us page */}
        <Route path="/contact-us">
          <Contact />
        </Route>

        {/* Routing the languages */}
        <Route path="/language/java">
          <Java />
        </Route>
        {/* Javascript page */}
        <Route path="/language/javascript">
          <Javascript />
        </Route>
        {/* All Developers page */}
        <Route path="/developers">
          <Developers />
        </Route>
        {/* course resources page. */}
        <Route path="/resources">
          <Resource/>
        </Route>
        {/* 404 page */}
        <Route component={PageDeleted}/>
      </Switch>
    </Router>
  );
}



export default navBar;
