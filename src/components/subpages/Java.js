import React, { useEffect } from "react";
// Import Styles file
import "../styles/Contact.css";
import "../styles/Java.css"

// Java Function
function Java() {

  // Change the browser title.
  useEffect(() => {
    document.title = "Java - spatepate"
  }, [])

  return (
    <div>
      {/* Java Header, with title and caption START */}
      <header className="jumbotron jumbotron-fluid bg-dark">
        <div className="container-fluid text-center">
          <h1 className="display-3">Java </h1>
          <p className="lead pb-4">
            Java is a class-based, object-oriented programming language.
          </p>
          <p>
            <a href="#lang" className="btn btn-danger btn-lg mybtn3" role="button">
              Scroll
            </a>
          </p>
        </div>
      </header>
      {/* Java Header, with title and caption END */}


      {/* FREE COURSES SECTION */}
      <section className="language-info" id="lang">
        <div className="container">
          <br />
          {/* title */}
          <h3 className="text-center">Free Courses/Tutorials</h3>
          <br />
          <div className="row">
            <div className="col-md-6">
              <div className="list-group">
                <div className="list-group-item list-group-item-action disabled bg-danger card-title">
                  Basics of Java
                  </div>

                {/* JAVA COURSE LINKS HERE / FIND AND ADD LINK HERE */}
                <a href="https://www.codecademy.com/learn/learn-java" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">codecademy</a>
                <a href="https://www.edx.org/professional-certificate/uc3mx-introduction-java-programming" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">edX -Intro to Java</a>
                <a href="https://www.edx.org/learn/java" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">edX - All Java Courses</a>
                <a href="https://www.learnjavaonline.org/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action ">LearnJavaOnline.org</a>
                <a href="https://www.youtube.com/watch?v=grEKMHGYyns&ab_channel=freeCodeCamp.org" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action ">9 Hour Java Content</a>
                <a href="https://www.youtube.com/watch?v=eIrMbAQSU34&ab_channel=ProgrammingwithMosh" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action ">Java with Mosh</a>
                <a href="https://www.youtube.com/watch?v=hBh_CC5y8-s&ab_channel=edureka%21" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action ">Java Full Course -Edureka</a>
              </div>
              <br />
            </div>


            <div className="col-md-6">
              <div className="list-group">
                <div className="list-group-item list-group-item-action disabled bg-danger card-title">
                  Machine Learning with Java
                  </div>

                {/* JAVA COURSE LINKS HERE / FIND AND ADD LINK HERE */}
                {/* machine learning */}
                <a href="#" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Linkmon 1</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Linkmon 2</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Linkmon 3</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action ">Linkmon 4</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action ">Linkmon 4</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action ">Linkmon 4</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action ">Linkmon 4</a>

              </div>
              <br />
            </div>


            <div className="col-md-6">
              <div className="list-group">
                <div className="list-group-item list-group-item-action disabled bg-danger card-title">
                  Games Development with Java
                  </div>

                {/* JAVA COURSE LINKS HERE / FIND AND ADD LINK HERE */}
                {/* game development */}
                <a href="http://zetcode.com/javagames/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">zetcode- Java 2D games</a>
                <a href="https://gamedevelopment.tutsplus.com/categories/java" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Java -Game Development</a>
                <a href="https://www.youtube.com/watch?v=K9qMm3JbOH0&ab_channel=AwaisMirza" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Java Game - Develop a Brick Breaker Game</a>
                <a href="https://www.youtube.com/watch?v=lDzKX3djE-M&ab_channel=MarcusDubreuil" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action ">Java game programming tutorial - 7hours</a>
                <a href="https://www.youtube.com/watch?v=_SqnzvJuKiA&ab_channel=AwaisMirza" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action ">Snake Game Tutorial</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action ">Linkmon 4</a>

              </div>
              <br />
            </div>
          </div>
        </div>
        <br />
      </section>
      {/* FREE COURSES SECTION end */}

    </div>

  );
}

export default Java;
