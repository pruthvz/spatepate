import React from 'react'

function Typescript() {
    return (
        <div>
        {/* TypeScript Header, with title and caption START */}
        <header className="jumbotron jumbotron-fluid bg-dark">
        <div className="container-fluid text-center">
          <h1 className="display-3">TypeScript</h1>
          <p className="lead pb-4">
          TypeScript extends JavaScript by adding types to the language. TypeScript speeds up your development experience by catching errors and providing fixes.
          </p>

        </div>
      </header>
      {/* TypeScript Header, with title and caption END */}


        {/* FREE COURSES SECTION */}
        <section className="language-info" id="lang">
        <div className="container">
          <br />
          {/* title */}
          <h3 className="text-center">Free Courses/Tutorials</h3>
          <br />
          
          <div className="row">
            <div className="col-md-12">
              <div className="list-group">
                <div className="list-group-item list-group-item-action disabled bg-danger text-light">
                  Basics of TypeScript 
                  </div>

                {/* JAVA COURSE LINKS HERE / FIND AND ADD LINK HERE */}
                  <a href="https://www.youtube.com/watch?v=WBPrJSw7yQA" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Learn TypeScript in 50 Minutes - Tutorial for Beginners <strong className="courseBy bg-light p-1 rounded m-1">creator</strong><strong className="badge badge-light p-1 rounded">Codevolution</strong></a>
                  <a href="https://www.youtube.com/watch?v=BwuLxPH8IDs" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">TypeScript Course for Beginners 2020 - Learn TypeScript from Scratch! <strong className="courseBy bg-light p-1 rounded m-1">creator</strong><strong className="badge badge-light p-1 rounded">Academind</strong></a>
                  <a href="https://www.youtube.com/watch?v=2pZmKW9-I_k&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">TypeScript Tutorial #1 - Introduction & Setup <strong className="courseBy bg-light p-1 rounded m-1"> The Net Ninja</strong></a>
                  <a href="https://www.youtube.com/watch?v=NjN00cM18Z4" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">TypeScript Tutorial - TypeScript for React - Learn TypeScript [2020] <strong className="courseBy bg-light p-1 rounded m-1"> Programming with Mosh</strong></a>
                  <a href="https://www.youtube.com/watch?v=rAy_3SIqT-E" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">TypeScript Crash Course <strong className="courseBy bg-light p-1 rounded m-1"> Traversy Media</strong></a>
                  <a href="https://www.youtube.com/watch?v=F2JCjVSZlG0" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">React / Typescript Tutorial - Build a Quiz App <strong className="courseBy bg-light p-1 rounded m-1"> freeCodeCamp.org</strong></a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action disabled">... <strong className="courseBy bg-light p-1 rounded m-1"> by ..</strong></a>

              </div>
              <br />
             

            </div>

          </div>
        </div>

      </section>
      {/* FREE COURSES SECTION end */}
      {/* ===================================================================== */}


      <section className="ideForCsharp bg-dark">
        <div className="container">
          <br/>
        <h4 className="text-center p-3 text-light">Learn more languages here..</h4>
          <div className="row col-md-12 justify-content-center ides">

              {/* IDE CARDS */}
              <div className="card ideCard" style={{width:"9.5rem"}}>
                <a href="./learn-python">
                <img className="card-img-top mx-auto rounded-2 p-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/600px-Python-logo-notext.svg.png" alt="Card image cap" />
                </a>
                <div className="card-body">
                  <p className="card-text">Python</p>
                </div>
              </div>

              <div className="card ideCard" style={{width:"9.5rem"}}>
                <a href="./learn-java">
                <img className="card-img-top mx-auto" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png" alt="Card image cap" />
                </a>
                <div className="card-body">
                  <p className="card-text">Java</p>
                </div>
              </div>

              <div className="card ideCard" style={{width:"9.5rem"}}>
                <a href="./learn-javascript">
                <img className="card-img-top mx-auto rounded p-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt="Card image cap" />
                </a>
                <div className="card-body">
                  <p className="card-text">JavaScript</p>
                </div>
              </div>

              <div className="card ideCard" style={{width:"9.5rem"}}>
                <a href="./learn-cplusplus">
                <img className="card-img-top mx-auto  p-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png" alt="Card image cap" />
                </a>
                <div className="card-body">
                  <p className="card-text">C++</p>
                </div>
              </div>


              <div className="card ideCard" style={{width:"9.5rem"}}>
                <a href="./learn-Csharp">
                <img className="card-img-top mx-auto m-2" src="https://logodix.com/logo/773624.png" alt="Card image cap" />
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

export default Typescript
