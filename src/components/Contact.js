// Using EmailJS for the contact form
import emailjs from "emailjs-com"
import React, {useEffect} from "react";
// Importing Contact stylings
import "./styles/Contact.css";

// Contact function.
function Contact() {

  // EmailJS rocks! livesaver
  function sendEmail(e){
    e.preventDefault();

    // emailJS API keys etc.
    emailjs.sendForm('gmail', 'spatepate', e.target, 'user_gVkUe9XM3OZW5H0uPzfXq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
  // Change the browser title.
  useEffect(() =>{
    document.title="spatepate - contact us"
}, [])

  return (
    <div>
      {/* Page header with content */}
      <header className="jumbotron jumbotron-fluid">
        <div className="container-fluid text-center" style={{ height: "30vh" }}>
          <h1 className="title display-3">Contact us </h1>
          <p className="lead pb-4" style={{ fontWeight: "300" }}>
            If you do find any issues please do contact us.  We will get back to you within 24 hours.
          </p>
        </div>
      </header>

      {/* CONTACT ME FORM  */}
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <form onSubmit={sendEmail} method="POST" action="send" className="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        name="name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Email"
                        name="email"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name= "subject"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        name="message"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <button type="submit" className="btn mybtn2">
                        Send Message
                      </button> {/* Submit form button */}
                    </div>
                  </div>
                </div>
              </form>
            </div>
            
            {/* Contact me icons, including number,location,email */}
            <div className="col-md-5">
              {/* Contact item start */}
              <div className="contact-item">
                <div className="icon">
                  <i className="fa fa-location-arrow"></i>
                </div>
                <h5>Location</h5>
                <p>Lorem ipsum dolor sit.</p>
              </div>
              {/* Contact item End */}
              {/* Contact item start */}
              <div className="contact-item">
                <div className="icon">
                  <i className="fa fa-envelope"></i>
                </div>
                <h5>Email</h5>
                <p>spatepateinfo@gmail.com</p>
              </div>
              {/* Contact item End */}
              {/* Contact item start */}
              <div className="contact-item">
                <div className="icon">
                  <i className="fa fa-phone"></i>
                </div>
                <h5>Call us on</h5>
                <p>+44 123456789</p>
              </div>
              {/* Contact item End */}
            </div>
          </div>
        </div>
      </section>
      {/* END OF CONTACT ME PAGE */}
    </div>
  );
}

export default Contact;
