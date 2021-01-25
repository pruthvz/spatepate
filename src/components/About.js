import React, {useEffect} from "react";
// Importing Page stylings
import "./styles/Contact.css";
import "./styles/About.css";

// Importing Images
import FounderImg from "../images/founder.jpg"
// import Unknown from "../images/unknown.jpg"
import Elon from "../images/elon.jpg"
import Elontwo from "../images/elon2.jpg"


// About function, with its details :)
function About() {
    // Change browser title
    useEffect(() =>{
        document.title="spatepate - about us"
    }, [])

  return (
    <div>
    {/* Page header title, and short caption [START] */}
      <header className="jumbotron jumbotron-fluid">
        <div className="container-fluid text-center">
          <h1 className="display-3">About us</h1>
          <p className="lead pb-4">
            We help you maximize performance and build healthy projects.
          </p>
          {/* Page scroll. */}
          <p>
            <a href="#team" className="btn btn-danger btn-lg mybtn3" role="button">
              Learn More
            </a>
          </p>
        </div>
      </header>
    {/* Page header title, and short caption [END] */}
    

    {/* ABOUT CEO particular START */}
    <section className="about-area">
        <div className="container">
            <div className="row">
            <div className="col-lg-6 col-lg-offset-1 p-5">
                 {/* About pruthvi */}
                 <div className="about-text">
                    <h2>about me</h2> 
                    <div style={{color : "blue", fontFamily: "Montserrat"}} className="programmer mb-2"> <i className="fas fa-code"></i> Web Developer | Student</div>
                    <p className="mb-2">I'm Pruthvi, the founder of spatepate. I'm very passionate in coding, I'm currently in College doing IT and Product Design as my courses. I like to develop and design web pages in my spare time. spatepate was my first project, that I wanted to completed. I want to use all my knowlege and try to make spatepate even better. I love to code, and desperate to learn new things.</p>
                    {/* Download My CV -ADD DOWNLOAD LINK TO CV. */}
                    <button className="cvBtn mt-2" href="#">Download CV</button> 
                 </div>
                </div>
                {/* My Image */}
                <div className="col-md-4 m-lg-5">
                    <div className="about-img">
                        <img src="https://images.unsplash.com/photo-1578769301269-8050b02dc6ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* ABOUT CEO particular END */}



    {/* ABOUT TEAM SECTION START */}
    <section className="team section" id="team">
    <div className="container">
        <h1 className="section-title">Meet Our Team</h1>
        <div className="row">
            {/* TEAM MEMBER ONE start */}
            <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="team-item">
                    <figure>
                    {/* Image */}
                    <img src={FounderImg} alt="" className="profile-img"></img>
                        <figcaption>
                            <div className="info">
                                <h3>Pruthvi Mohanlal</h3>
                                <p>Chief Executive Officer</p>
                            </div>
                            {/* Social Links */}
                            <div className="social">
                                <a href="https://twitter.com/justpruthvi" target="_blank" rel="noopener noreferrer" className="twitter" data-abc="true"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.instagram.com/pruthv1_" target="_blank"  rel="noopener noreferrer" className="facebook" data-abc="true"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/pruthvi-mohanlal-b40602190/" target="_blank" rel="noopener noreferrer" className="linkedin" data-abc="true"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
            {/* TEAM MEMBER ONE end */}

            {/* TEAM MEMBER TWO start */}
            {/* <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="team-item">
                    <figure>
                    <img src={Elontwo} alt="" className="profile-img"></img>
                        <figcaption>
                            <div className="info">
                                <h3>Temta Swang</h3>
                                <p>Web Designer</p>
                            </div>
               
                            <div className="social">
                                <a href="#" className="twitter" data-abc="true"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="facebook" data-abc="true"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="linkedin" data-abc="true"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div> */}
            {/* TEAM MEMBER TWO end */}

            {/* TEAM MEMBER THREE start */}
            <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="team-item">
                    <figure>
                        <img src="https://pbs.twimg.com/profile_images/716487122224439296/HWPluyjs.jpg" alt="" className="profile-img"></img>
                        <figcaption>
                            <div className="info">
                                <h3></h3>
                                <p></p>
                            </div>
                            {/* Social Links */}
                            <div className="social">
                                <a href="#" className="twitter" data-abc="true"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="facebook" data-abc="true"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="linkedin" data-abc="true"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
            {/* TEAM MEMBER THREE end */}
        </div>
    </div>
</section>
{/* ABOUT TEAM SECTION END */}

{/* HIRING PEOPLE MESSAGE. */} 
<center>
    <div className="badge badge-info text-center p-4 "> 
        <h5><strong>Hey, want to join the team?</strong></h5>
    <h6><strong>I'm looking for more people,</strong> that are interested to help me out with this project. Please do contact my email, I'd love to see your interest in this small project.</h6>
    </div>
</center>
{/* <marquee behavior="scroll" direction="left">I'm looking for more people, that would be greatful to help me out with this project. Please do contact my email, I'd love to see your interest in this small project.</marquee> */}


{/* IMAGE SLIDER COMING SOON */}
<br />
    </div>
  );
}

export default About;
