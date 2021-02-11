import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
} from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";

// Importing all pages below
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import PageDeleted from "./Pagedeleted";

// languages
import Java from "./subpages/Java";
import Javascript from "./subpages/Javascript";
import Python from "./subpages/Python";
import Developers from "./subpages/Developers";
import Resource from "./subpages/Resources";
import Books from "./Book";
import Programming from "./Programming";
import Csharp from "./subpages/Csharp"
import Cplusplus from "./subpages/Cplusplus"
import Swift from "./subpages/Swift"
import Typescript from "./subpages/Typescript"




// Temp files
import GoogleBooks from "./GoogleBooks"


// Navbar Function, with all the dropdowns and links. 
const NavBar = props => {

  return (
    // page router. React bootstrap navbar.
    <Router>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar-custom"
        variant="dark"
        // sticky="top"
      >
        <Navbar.Brand href="/spatepate/" className="navbar-brand">spatepate</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/spatepate/programming" exact ><i className="fa fa-code"></i> Programming</Nav.Link>
            <Nav.Link href="/spatepate/developers" exact> Developers</Nav.Link>
            <Nav.Link href="/spatepate/about-us" exact> About</Nav.Link>
            <Nav.Link href="/spatepate/contact-us" exact> Contact</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="/spatepate/resources" exact> Resources</Nav.Link>
            <Nav.Link eventKey={2} href="https://www.reddit.com/r/dankmemes/" target="_blank"  rel="noopener noreferrer">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


        {/* Page redirection. */}
      <Switch>
        {/* Home page */}
        <Route exact path="/spatepate/">
          <Home />
        </Route>

        {/* About page */}
        <Route exact path="/spatepate/about-us">
          <About />
        </Route>

        {/* Contact us page */}
        <Route exact path="/spatepate/contact-us">
          <Contact />
        </Route>

         {/* Routing the programming page */}
         <Route exact path="/spatepate/programming">
         <Programming />
        </Route>

        {/* Routing the languages */}
        <Route exact path="/spatepate/language/learn-java">
          <Java />
        </Route>

        {/* Javascript page */}
        <Route exact path="/spatepate/language/learn-javascript">
          <Javascript />
        </Route>

        {/* Python page */}
        <Route exact path="/spatepate/language/learn-python">
          <Python />
        </Route>
        
        {/* C# page */}
        <Route exact path="/spatepate/language/learn-Csharp">
          <Csharp/>
        </Route>

        {/* C++ page */}
        <Route exact path="/spatepate/language/learn-cplusplus">
          <Cplusplus />
        </Route>

        {/* Swift page */}
        <Route exact path="/spatepate/language/learn-swift">
          <Swift />
        </Route>

        {/* Kotlin page */}
        <Route exact path="/spatepate/language/learn-kotlin">
          <p className="p-1 ">vist this page later, this page is under construction.</p>
          <h2>Kotlin page coming here soon...</h2>
        </Route>

        {/* Typescript page */}
        <Route path="/spatepate/language/learn-typescript">
          <Typescript />
        </Route>

        {/* All Developers page */}
        <Route exact path="/spatepate/developers">
          <Developers />
        </Route>
        
        {/* course resources page. */}
        <Route exact path="/spatepate/resources">
          <Resource/>
        </Route>

        {/* course book api page  . */}
        <Route exact path="spatepate/books">
          <Books/>
        </Route>

       {/* course book api page  . */}
       <Route exact path="spatepate/googlebooks">
          <GoogleBooks/>
        </Route>

        {/* 404 page */}
        <Route component={PageDeleted}/>
      </Switch>
    </Router>
  );
}



export default NavBar;
  