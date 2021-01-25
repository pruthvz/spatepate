import React from 'react'
import "../styles/Swift.css"


function Swift() {
    return (
        <div>
             {/* Swift Header, with title and caption START */}
     <header className="jumbotron jumbotron-fluid bg-dark">
        <div className="container-fluid text-center">
          <h1 className="display-3">Swift</h1>
          <p className="lead pb-4">
          Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc.
          </p>
          <p>
            <a href="#lang" className="btn btn-danger btn-lg mybtn2" role="button">
              Scroll
            </a>
          </p>
        </div>
      </header>
      {/* Swift Header, with title and caption END */}


      
      {/* ===================================================================== */}
      {/* TUTORIALS AREA FOR Swift */}
      <section className="language-info" id="lang">
        <div className="container">
          <br />
          {/* title */}
          <h3 className="text-center">Free Courses/Tutorials</h3>
          <br />
          
          <div className="row">
            <div className="col-md-12">
              <div className="list-group">
                <div className="list-group-item list-group-item-action disabled bgSwift">
                  Swift Basics
                  </div>
                {/* Swift COURSE LINKS HERE / FIND AND ADD LINK HERE */} 
                <a href="https://www.youtube.com/watch?v=comQ1-x2a1Q&ab_channel=freeCodeCamp.org" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Swift Tutorial - Full Course for Beginners<strong className="courseBy4 p-1 rounded m-1">freeCodeCamp.org</strong><strong className="badge badge-light p-1 rounded">Beginner</strong></a>
                <a href="https://www.youtube.com/playlist?list=PL6gx4Cwl9DGDgp7nGSUnnXihbTLFZJ79B" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">iOS Development with Swift Tutorials<strong className="courseBy4 p-1 rounded m-1">thenewboston</strong></a>
                <a href="https://www.youtube.com/watch?v=FcsY1YPBwzQ&ab_channel=CodeWithChris" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Learn Swift Fast (2020) - Full Course For Beginners<strong className="courseBy4 p-1 rounded m-1">CodeWithChris</strong></a>
                <a href="https://www.youtube.com/watch?v=mhE-Mp07RTo&ab_channel=Devslopes" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Swift Tutorial For Beginners [Full Course] Learn Swift For iOS Development<strong className="courseBy4 p-1 rounded m-1">Devslopes</strong></a>
                <a href="https://www.youtube.com/watch?v=09TeUXjzpKs&ab_channel=CodeWithChris" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">iOS Tutorial (2020): How To Make Your First App<strong className="courseBy4 p-1 rounded m-1">CodeWithChris</strong></a>
                <a href="https://www.youtube.com/watch?v=U-Y9HJzNhQ0&ab_channel=iOSAcademy" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Swift for Beginners: Create To Do List App (2020)<strong className="courseBy4 p-1 rounded m-1">iOS Academy</strong></a>
                <a href="https://www.youtube.com/watch?v=Pd8IvykiW20&ab_channel=DerekBanas" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Swift 5 Tutorial 2020<strong className="courseBy4 p-1 rounded m-1">Derek Banas</strong></a>
                <a href="https://www.youtube.com/watch?v=4R9DJxjmSCk&ab_channel=iOSAcademy" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Build To Do List App in Swift 5 (Xcode 11) - 2020 Beginners<strong className="courseBy4 p-1 rounded m-1">iOS Academy</strong></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action disabled">Searching...<strong className="courseBy4 p-1 rounded m-1">By...</strong></a>
                <p className="alert alert-warning">If you have any tutorials, please do contact me.</p>
           
                
                
              </div>
              <br />
            </div>

          </div>
        </div>
        <br />
      </section>

      <section className="ideForCsharp bg-dark">
        <div className="container">
          <br/>
        <h4 className="text-center p-3 text-light">Learn more languages here..</h4>
          <div className="row col-md-12 justify-content-center ides">

              {/* IDE CARDS */}
              <div className="card ideCard" style={{width:"9.5rem"}}>
                <a href="./learn-python">
                <img className="card-img-top mx-auto rounded-2 p-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/600px-Python-logo-notext.svg.png" alt="python logo" />
                </a>
                <div className="card-body">
                  <p className="card-text">Python</p>
                </div>
              </div>

              <div className="card ideCard" style={{width:"9.5rem"}}>
                <a href="./learn-java">
                <img className="card-img-top mx-auto" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png" alt="java logo" />
                </a>
                <div className="card-body">
                  <p className="card-text">Java</p>
                </div>
              </div>

              <div className="card ideCard" style={{width:"9.5rem"}}>
                <a href="./learn-javascript">
                <img className="card-img-top mx-auto rounded p-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt="javascript logo" />
                </a>
                <div className="card-body">
                  <p className="card-text">JavaScript</p>
                </div>
              </div>

              <div className="card ideCard" style={{width:"9.5rem"}}>
                <a href="./learn-cplusplus">
                <img className="card-img-top mx-auto  p-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png" alt="cplusplus logo" />
                </a>
                <div className="card-body">
                  <p className="card-text">C++</p>
                </div>
              </div>


              <div className="card ideCard" style={{width:"9.5rem"}}>
                <a href="./learn-Csharp">
                <img className="card-img-top mx-auto m-2" src="https://logodix.com/logo/773624.png" alt="csharp logo" />
                </a>
                <div className="card-body">
                  <p className="card-text">C#</p>
                </div>
              </div>
      

              <div className="card ideCard" style={{width:"9.5rem"}}>
                <a href="./learn-typescript">
                <img className="card-img-top mx-auto p-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="typescript logo" />
                </a>
                <div className="card-body">
                  <p className="card-text">TypeScript</p>
                </div>
              </div>

            </div>
          </div>
      </section>


      {/* FREE COURSES SECTION end */}
        </div>
    )
}

export default Swift
