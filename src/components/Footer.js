import React from "react";
// Importing bootstrap and Home page stylings.
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Home.css";

// Footer function, footer parts.
function Footer() {
  return (
    <div>
      <footer className="footer ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="footer-logo">
                {/* website title, with link back to landing page. */}
                <a href="/">
                  <span className="logo"></span>spatepate
                </a>
              </div>
              {/* Short description */}
              <div className="footer-tex">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit, suscipit.
                </p>
              </div>
              {/* Social media links and icons */}
              <div className="footer-social-links">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/pruthvi-mohanlal-b40602190/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* copyright reserved spatepate. */}
        <div className="copyright">
          <p>Copyright &copy; The spatepate 2020</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
