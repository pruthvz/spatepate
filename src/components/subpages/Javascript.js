import React from "react";
import "../styles/JavaScript.css"


function Javascript() {
  return (
    <div>
    {/* JavaScript Header, with title and caption START */}
    <header className="jumbotron jumbotron-fluid bg-dark">
        <div className="container-fluid text-center">
          <h1 className="display-3">JavaScript <i className="fab fa-js-square"></i> </h1>
          <p className="lead pb-4">
          JS is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages.
          </p>
          <p>
            <a href="#lang" className="btn btn-danger btn-lg mybtn3" role="button">
              Scroll
            </a>
          </p>
        </div>
      </header>
      {/* JavaScript Header, with title and caption END */}


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
                <div className="list-group-item list-group-item-action disabled text-light titleBg">
                  Basics of Javascript <i className="fab fa-js-square"></i>
                  </div>
                {/* JavaScript COURSE LINKS HERE / FIND AND ADD LINK HERE */}
                <a href="https://www.codecademy.com/learn/introduction-to-javascript" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Learn JavaScript<strong className="courseBy bg-light p-1 rounded m-1">codecademy</strong><strong className="badge badge-light p-1 rounded">Beginner</strong></a>
                <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Introduction to JavaScript<strong className="courseBy bg-light p-1 rounded m-1">freeCodeCamp</strong><strong className="badge badge-light p-1 rounded">Beginner</strong></a>
                <a href="http://javascript.info/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">The JavaScript Tutorial<strong className="courseBy bg-light p-1 rounded m-1">javascript.info</strong></a>
                <a href="https://www.w3schools.com/js/default.asp" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">JavaScript Tutorial<strong className="courseBy bg-light p-1 rounded m-1">W3Schools</strong></a>
                <a href="https://www.youtube.com/watch?v=W6NZfCO5SIk&ab_channel=ProgrammingwithMosh" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">JavaScript Tutorial for Beginners<strong className="courseBy bg-light p-1 rounded m-1">Programming with Mosh</strong></a>
                <a href="https://scrimba.com/g/gintrotojavascript" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Introduction to JavaScript<strong className="courseBy bg-light p-1 rounded m-1">scrimba</strong></a>
                <a href="https://learnjavascript.online/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Learn JavaScript step-by-step<strong className="courseBy bg-light p-1 rounded m-1">learnjavascript</strong></a>
                <a href="https://web.dev/promises/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">JavaScript Promises: An introduction<strong className="courseBy bg-light p-1 rounded m-1">web.dev</strong></a>
                <a href="https://www.rithmschool.com/courses/javascript" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Rithm School JavaScript Fundamentals<strong className="courseBy bg-light p-1 rounded m-1">Rithm School</strong></a>
                <a href="https://www.youtube.com/watch?v=hdI2bqOjy3c&ab_channel=TraversyMedia" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">JavaScript Crash Course For Beginners<strong className="courseBy bg-light p-1 rounded m-1">Traversy Media</strong></a>
                <a href="https://www.youtube.com/playlist?list=PLpcSpRrAaOaoIqHQddZOdbRrzr5dJtgSs" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">The 10 Days of JavaScript<strong className="courseBy bg-light p-1 rounded m-1">LearnWebCode</strong></a>

                

              </div>
              <br />
            </div>

            <div className="col-md-6">
              <div className="list-group">
                <div className="list-group-item list-group-item-action disabled titleBg text-light">
                  Web/Mobile Projects
                  </div>

                {/* JavaScript COURSE LINKS HERE / FIND AND ADD LINK HERE */}
                {/* moible app development */}
                <a href="https://www.youtube.com/watch?v=zXb8wt6jb1s&feature=youtu.be&ab_channel=AtopWebTech" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Build A Github Repository Finder App<strong className="courseBy bg-light p-1 rounded m-1">Atop Web Tech</strong></a>
                <a href="https://www.youtube.com/watch?v=3PHXvlpOkf4&ab_channel=freeCodeCamp.org" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Build 15 JavaScript Projects - Vanilla JavaScript Course<strong className="courseBy bg-light p-1 rounded m-1">freeCodeCamp</strong></a>
                <a href="https://www.youtube.com/watch?v=m_HJ3juuFvo&ab_channel=freeCodeCamp.org" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Javascript Project Tutorial: Budget App<strong className="courseBy bg-light p-1 rounded m-1">freeCodeCamp</strong></a>
                <a href="https://www.youtube.com/watch?v=Ttf3CEsEwMQ&ab_channel=DevEd" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Beginner Javascript Project Tutorial - ToDoList<strong className="courseBy bg-light p-1 rounded m-1">Dev Ed</strong><strong className="badge badge-light p-1 rounded">Beginner</strong></a>
                <a href="https://www.youtube.com/watch?v=NYq9J-Eur9U&ab_channel=CodingTheSmartWay.com" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Learn JavaScript By Building A Real-World Application <strong className="courseBy bg-light p-1 rounded m-1">CodingTheSmartWay.com</strong></a>
                <a href="https://www.youtube.com/watch?v=j59qQ7YWLxw&ab_channel=WebDevSimplified" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Build A Calculator With JavaScript Tutorial<strong className="courseBy bg-light p-1 rounded m-1">Web Dev Simplified</strong><strong className="badge badge-light p-1 rounded">Beginner</strong></a>
                <a href="https://www.youtube.com/watch?v=wPElVpR1rwA&ab_channel=DevEd" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Build A Weather App With Vanilla Javascript Tutorial<strong className="courseBy bg-light p-1 rounded m-1">Dev Ed</strong></a>
                <a href="https://www.youtube.com/watch?v=7l-ZAuU8TXc&ab_channel=TraversyMedia" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Simple Weight Converter App With JavaScript & Bootstrap 4<p><strong className="courseBy text-primary bg-light p-1 rounded m-1">Traversy Media</strong></p></a>
                <a href="https://www.youtube.com/watch?v=gYHdSILCYCs&ab_channel=Aphrx" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">How I built Password Generator using JavaScript & Bootstrap<p><strong className="courseBy text-primary bg-light p-1 rounded m-1">Aphrx</strong></p></a>
               
              </div>
              <br />
            </div>
            

            <div className="col-md-6">
              <div className="list-group">
                <div className="list-group-item list-group-item-action disabled titleBg text-light">
                  Games Development <i className="fas fa-gamepad-alt"></i>
                  </div>

                {/* JavaScript COURSE LINKS HERE / FIND AND ADD LINK HERE */}
                {/* game development */}
                <a href="https://www.youtube.com/watch?v=lhNdUVh3qCc&ab_channel=freeCodeCamp.org" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Learn JavaScript by Building 7 Games<strong className="courseBy bg-light p-1 rounded m-1">freeCodeCamp</strong></a>
                <a href="https://www.youtube.com/watch?v=QTcIXok9wNY&ab_channel=WebDevSimplified" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">How To Code The Snake Game In Javascript<strong className="courseBy bg-light p-1 rounded m-1">Web Dev Simplified</strong></a>
                <a href="https://www.youtube.com/watch?v=Y-GkMjUZsmM&ab_channel=WebDevSimplified" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Build Tic Tac Toe With JavaScript - Tutorial<strong className="courseBy bg-light p-1 rounded m-1">Web Dev Simplified</strong></a>
                <a href="https://www.youtube.com/watch?v=riDzcEQbX6k&ab_channel=WebDevSimplified" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Build A Quiz App With JavaScript<strong className="courseBy bg-light p-1 rounded m-1">Web Dev Simplified</strong></a>
                <a href="https://www.youtube.com/watch?v=3SsYZDJdeXk&ab_channel=KnifeCircus" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">The Easiest Flappy Bird Tutorial - Beginner Javascript Game<strong className="courseBy bg-light p-1 rounded m-1">KnifeCircus</strong></a>
                <a href="https://www.youtube.com/watch?v=nl0KXCa5pJk&ab_channel=CodeExplained" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Code Ping Pong Game Using JavaScript and HTML5<strong className="courseBy bg-light p-1 rounded m-1">Code Explained</strong></a>


              </div>
              <br />
            </div>
          </div>
        </div>
        <br />
      </section>
      {/* FREE COURSES SECTION end */}


      {/* Best IDE's and Framework section here. */}
      <section className="jumbotron jumbotron-fluid bg-ide">
      <br/>
      <h3 className="text-center subtitleIDE text-light">Recommended IDE for JavaScript</h3>
      <br/>

      <div className="container ide-cards">
        {/* CARDS IN ROW AND CENTERING THE CARDS. */}
        <div className="row justify-content-center">
          {/* IDE START  */}
          <div className="card border-dark mb-3" style={{maxWidth:"16rem"}}>
            <div className="card-header"><a href="https://atom.io/" className="ide-name text-info" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>Atom</a></div>
            <div className="card-body text-dark">
            <img className="card-img-top" src="https://download.logo.wine/logo/Atom_(text_editor)/Atom_(text_editor)-Logo.wine.png" alt="Atom Logo" />
              <p className="ide-short card-text pt-3">Atom is one of the most popular source code editors used for JavaScript development. The modern code editor is flexible and highly customizable.</p>
              <h6 className="platform-name">Type - <span className="platform">Source Code Editor (Open-source)</span></h6>
            </div>
          </div>
          {/* IDE END  */}
          <div className="p-2"></div>

         {/* IDE START  */}
         <div className="card border-dark mb-3" style={{maxWidth:"16rem"}}>
            <div className="card-header"><a href="https://www.vim.org/download.php" className="ide-name text-info" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>Vim</a></div>
            <div className="card-body text-dark">
            <img className="card-img-top" style={{width:"150px"}} src="https://www.wykop.pl/cdn/c3201142/comment_zLNa0nWIJz3p3OULS0KnMCLk4JCDBnkk.jpg" alt="Vim Logo" />
              <p className="ide-short card-text pt-3">According to Stack Overflow developer survey 2018, Vim is the 5th most-popular development environment for all respondents and the top-choice for system administrators and DevOps personnel.</p>
              <h6 className="platform-name">Type - <span className="platform">Text Editor (Open-source/Charityware)</span></h6>
            </div>
          </div>
          {/* IDE END  */}
          <div className="p-2"></div>
        
         {/* IDE START  */}
         <div className="card border-dark mb-3" style={{maxWidth:"16rem"}}>
            <div className="card-header"><a href="https://visualstudio.microsoft.com/" className="ide-name text-info" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>Visual Studio</a></div>
            <div className="card-body text-dark">
            <img className="card-img-top" src="https://venturebeat.com/wp-content/uploads/2019/11/visual-studio-logo.jpeg?fit=800%2C400&strip=all " alt="Visual Studio Logo" />
              <p className="ide-short card-text pt-5">Yet another leading IDE for JavaScript development is Visual Studio. The integrated development environment is primarily used for developing computer programs for the Windows platform.</p>
              <h6 className="platform-name">Type - <span className="platform">General IDE</span></h6>
            </div>
          </div>
          {/* IDE END  */}
          <div className="p-2"></div>

         {/* IDE START  */}
         <div className="card border-dark mb-3" style={{maxWidth:"16rem"}}>
            <div className="card-header"><a href="https://code.visualstudio.com/download" className="ide-name text-info" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>Visual Studio Code <span className="badge badge-pill badge-dark">BEST</span></a></div>
            <div className="card-body text-dark">
            <img className="card-img-top" src="https://blog.launchdarkly.com/wp-content/uploads/2018/10/visualstudio_code-card.png" alt="Vs Code Logo" />
              <p className="ide-short card-text pt-5">Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux.</p>
              <h6 className="platform-name">Type - <span className="platform">Source Code Editor</span></h6>
            </div>
          </div>
          {/* IDE END  */}
          <div className="p-2"></div>

          
        </div>
        </div>
      </section>

    </div>
  );
}

export default Javascript;
