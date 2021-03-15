import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavItem } from "react-bootstrap";

import { Link } from "react-router-dom";
import "../App.css";

// Navbar Function, with all the dropdowns and links.
const NavBar = (props) => {
  return (
    // page router. React bootstrap navbar.

    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar-custom"
      variant="dark"
      // sticky="top"
    >
      <Link to="/spatepate/">
        <Navbar.Brand className="navbar-brand">spatepate</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/spatepate/">
            Home
          </Link>
          <Link className="nav-link" to="/spatepate/programming">
            <i className="fa fa-code"></i> Programming
          </Link>
          <Link className="nav-link" to="/spatepate/developers">
            Developers
          </Link>
          <Link className="nav-link" to="/spatepate/about-us">
            About
          </Link>
          <Link className="nav-link" to="/spatepate/contact-us">
            Contact
          </Link>
        </Nav>
        <Nav>
          <Link className="nav-link" to="/spatepate/resources">
            Resources
          </Link>
          <Nav.Link
            eventKey={2}
            href="https://www.reddit.com/r/dankmemes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
