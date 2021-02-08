import React, {useEffect} from "react";

// CSS stylings
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Home.css";

// Images importings
import Logo from "../images/coding.png";
import Aboutimg from "../images/person.svg";

// Home function/component
function Home() {

  // Change the browser title.
  useEffect(() =>{
    document.title="spatepate: bringing all developers to one place."
}, [])
  

  //Landing Page code. 
  return (
    <div>
      <section className="home-section">
        <div className="bg-shapes">
          <div></div>
          <div></div>
          {/* <div></div> */}
        </div>

        {/* Landing page START */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="home-content">
                <h1>Quick and easy one click programming tutorials</h1>
                <p>
                  spatepate will help you get started with the most beginner friendly tutorials to advanced. We hold no credit over the tutorials, the videos are credited along with all the documentation. We hope to search for the best tutorial, so you don't have to waste time.
                </p>
                <a href="#down" className="btn mybtn1">
                  Learn more
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home-img">
                <img src={Logo} alt="learn to code" />
              </div>
            </div>
          </div>
        </div>
        </section>
        {/* Landing page END */}



        {/* About the site START */}
      <section className="about-section" id="down">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 ">
              <div className="about-img">
                <img className="img-fluid" src={Aboutimg} alt="easy findings" />
              </div>
            </div>

            {/* Quick information about the wesbite, and what we do as spatepate.*/}
            <div className="col-lg-6 ">
              <div className="section-title">
                <h1 className="title">ABOUT PRODUCT</h1>
                <h2 className="subtitle">
                  Finding you all the free courses and tutorials
                </h2>
              </div>
              {/* Bullet pointed points */}
              <div className="about-content">
                <p>
                  We have looked at the most popular languages and have created a list of the best beginner friendly videos to the advanced tutorials. The programming languages are also categorised in what they can be used for.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-check"></i> We can help you get started with your project
                    with your project
                  </li>
                  <li>
                    <i className="fa fa-check"></i> We will provide you with fast one click links.
                  </li>
                  <li>
                    <i className="fa fa-check"></i> We have categorised the programming language for you.
                  </li>
                  <li>
                    <i className="fa fa-check"></i> We have also linked the best creators and many more yet to be added.
                  </li>
                  <li>
                    <i className="fa fa-check"></i> We've found few of the best resources to learn programming.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About the site END */}


      {/* Services section START */}
      <section className="features-section bg-dark"> {/* black background */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title2">
                <h1 className="title">Our Services</h1>
                <h2 className="subtitle2">What we have for you.</h2>
              </div>
            </div>
          </div>

          {/* All the services spatepate provides. */}
          <div className="row">
            {/* Feature item start */}
            <div className="col-md-4 col-lg-4">
              <div className="features-item">
                <div className="icon">
                  <i className="fa fa-compress"></i>
                </div>
                <h3>One Click</h3>
                <p>
                  Quick and easy one click, that redirects to the tutorial.
                </p>
              </div>
            </div>
            {/* Feature item end */}
            {/* Feature item start */}
            <div className="col-md-4 col-lg-4">
              <div className="features-item">
                <div className="icon">
                  <i className="fas fa-code"></i>
                </div>
                <h3>Programming</h3>
                <p>
                  spatepate is all about providing help in programming.
                </p>
              </div>
            </div>
            {/* Feature item end */}
            {/* Feature item start */}
            <div className="col-md-4 col-lg-4">
              <div className="features-item">
                <div className="icon">
                  <i className="fa fa-users"></i>
                </div>
                <h3>User Experience</h3>
                <p>
                  We have created a great easy to use interface.
                </p>
              </div>
            </div>
            {/* Feature item end */}
            {/* Feature item start row 2*/}
            <div className="col-md-4 col-lg-4">
              <div className="features-item">
                <div className="icon">
                  <i class="fas fa-comments"></i>
                </div>
                <h3>Communications</h3>
                <p>
                  We will be providing a discussion page where you can chat to others.
                </p>
              </div>
            </div>
            {/* Feature item end */}
            {/* Feature item start */}
            <div className="col-md-4 col-lg-4 ">
              <div className="features-item">
                <div className="icon">
                  <i class="fa fa-window-maximize"></i>
                </div>
                <h3>Web Design</h3>
                <p>
                  We have linked tutorials about Web Developer/Design too.
                </p>
              </div>
            </div>
            {/* Feature item end */}
            {/* Feature item start */}
            <div className="col-md-4 col-lg-4">
              <div className="features-item">
                <div className="icon">
                  <i className="fa fa-question"></i>
                </div>
                <h3>Support</h3>
                <p>
                  24/7 Support if you need help or have any queries.
                </p>
              </div>
            </div>
            {/* Feature item end */}
          </div>
        </div>
      </section>
      {/* Services section END */}
      


      {/* Testinmonals coming soon start*/}
      {/* Testinmonals coming soon end*/}

      {/* News letter section START */}
      <section className="newsletter-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title">
                <h1 className="title">Newsletter</h1>
                <h2 className="subtitle">Subscribe To Get Updates</h2>
              </div>
            </div>
          </div>
          {/* Newsletter Email Input */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-7">
              <form action="#" className="newsletter-form">
                <div className="form-group">
                  <input
                    type="text"
                    name=""
                    className="form-control"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <button type="submit" className="btn mybtn2">
                  <span>Subscribe </span>
                  <i className="fa fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* News letter section END */}


    </div>
  );
}

export default Home;
