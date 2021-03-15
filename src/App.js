import React from "react";
// Page Styling and Bootstrap Import
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Page components import
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Importing all pages below
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import PageDeleted from "./components/Pagedeleted";

// languages
import Java from "./components/subpages/Java";
import Javascript from "./components/subpages/Javascript";
import Python from "./components/subpages/Python";
import Developers from "./components/subpages/Developers";
import Resource from "./components/subpages/Resources";
import Books from "./components/Book";
import Programming from "./components/Programming";
import Csharp from "./components/subpages/Csharp";
import Cplusplus from "./components/subpages/Cplusplus";
import Swift from "./components/subpages/Swift";
import Typescript from "./components/subpages/Typescript";
import GoogleBooks from "./components/GoogleBooks";

function App() {
  return (
    <div className="App">
      {/* MAIN PAGE LAYOUT */}
      <Router>
        <NavBar />

        {/* Page redirection. */}
        <Switch>
          {/* Home page */}
          <Route path="/spatepate/" exact component={Home}></Route>

          {/* About page */}
          <Route path="/spatepate/about-us" component={About}></Route>

          {/* Contact us page */}
          <Route path="/spatepate/contact-us"  component={Contact}></Route>

          {/* Routing the programming page */}
          <Route
            path="/spatepate/programming"
            
            component={Programming}
          ></Route>

          {/* Routing the languages */}
          <Route
            path="/spatepate/language/learn-java"
            
            component={Java}
          ></Route>

          {/* Javascript page */}
          <Route
            path="/spatepate/language/learn-javascript"
            component={Javascript}
          ></Route>

          {/* Python page */}
          <Route
            path="/spatepate/language/learn-python"
            component={Python}
          ></Route>

          {/* C# page */}
          <Route
            path="/spatepate/language/learn-Csharp"
            component={Csharp}
          ></Route>

          {/* C++ page */}
          <Route
            path="/spatepate/language/learn-cplusplus"
            component={Cplusplus}
          ></Route>

          {/* Swift page */}
          <Route
            path="/spatepate/language/learn-swift"
            component={Swift}
          ></Route>

          {/* Kotlin page */}
          <Route path="/spatepate/language/learn-kotlin">
            <p className="p-1 ">
              vist this page later, this page is under construction.
            </p>
            <h2>Kotlin page coming here soon...</h2>
          </Route>

          {/* Typescript page */}
          <Route
            path="/spatepate/language/learn-typescript"
            component={Typescript}
          ></Route>

          {/* All Developers page */}
          <Route path="/spatepate/developers">
            <Developers />
          </Route>

          {/* course resources page. */}
          <Route path="/spatepate/resources" component={Resource}></Route>

          {/* course book api page  . */}
          <Route path="spatepate/books" component={Books}></Route>

          {/* course book api page  . */}
          <Route path="spatepate/googlebooks" component={GoogleBooks}></Route>

          {/* 404 page */}
          <Route component={PageDeleted} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
