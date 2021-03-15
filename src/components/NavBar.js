import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../App.css";

// Navbar Function, with all the dropdowns and links.
const NavBar = (props) => {
  return (
    // page router. React bootstrap navbar.
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<a className="navbar-brand" href="/spatepate/">
          <i className="fas fa-exclamation text-danger"></i> spatepate
        </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
    <Link to="/spatepate/">
              <li className="nav-item">
                <a className="nav-link " aria-current="page">
                  Home
                </a>
              </li>
            </Link>
            <Link to="/spatepate/programming">
              <li className="nav-item">
                <a className="nav-link " aria-current="page">
                  Programming
                </a>
              </li>
            </Link>
            <Link to="/spatepate/developers">
              <li className="nav-item">
                <a className="nav-link " aria-current="page">
                  Developers
                </a>
              </li>
            </Link>

            <Link to="/spatepate/about-us">
              <li className="nav-item">
                <a className="nav-link">About</a>
              </li>
            </Link>
            <Link to="/spatepate/contact-us">
              <li className="nav-item">
                <a className="nav-link " aria-current="page">
                  Contact
                </a>
              </li>
            </Link>
    </ul>
    <ul class="navbar-nav ml-auto pr-3">
    <Link to="/spatepate/resources">
              <li className="nav-item">
                <a className="nav-link " aria-current="page">
                  Resources
                </a>
              </li>
            </Link>
            <li className="nav-item">
                <a className="nav-link text-danger " aria-current="page" href="https://www.reddit.com/r/dankmemes/" target='_blank'>
                  Dank Memes
                </a>
              </li>
      </ul>
  </div>
</nav>


    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="/spatepate/">
    //       <i className="fas fa-exclamation text-danger"></i> spatepate
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-mdb-toggle="collapse"
    //       data-mdb-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <i className="fas fa-bars"></i>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav mr-auto pr-2">
            // <Link to="/spatepate/">
            //   <li className="nav-item">
            //     <a className="nav-link " aria-current="page">
            //       Home
            //     </a>
            //   </li>
            // </Link>
            // <Link to="/spatepate/programming">
            //   <li className="nav-item">
            //     <a className="nav-link " aria-current="page">
            //       Programming
            //     </a>
            //   </li>
            // </Link>
            // <Link to="/spatepate/developers">
            //   <li className="nav-item">
            //     <a className="nav-link " aria-current="page">
            //       Developers
            //     </a>
            //   </li>
            // </Link>

            // <Link to="/spatepate/about-us">
            //   <li className="nav-item">
            //     <a className="nav-link">About</a>
            //   </li>
            // </Link>
            // <Link to="/spatepate/contact-us">
            //   <li className="nav-item">
            //     <a className="nav-link " aria-current="page">
            //       Contact
            //     </a>
            //   </li>
            // </Link>
    //       </ul>
    //       <ul className="navbar-nav ml-auto pr-2">
    //         <Link to="/spatepate/resources">
    //           <li className="nav-item">
    //             <a className="nav-link " aria-current="page">
    //               Resources
    //             </a>
    //           </li>
    //         </Link>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    
  );
};

export default NavBar;
