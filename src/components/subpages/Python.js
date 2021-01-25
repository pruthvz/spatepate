import React from 'react'
import "../styles/Python.css"



function Python() {
    return (
        <div>
   {/* Python Header, with title and caption START */}
   <header className="jumbotron jumbotron-fluid bg-dark">
        <div className="container-fluid text-center">
          <h1 className="display-3">Python <i className="fab fa-python"></i> </h1>
          <p className="lead pb-4">
          Python is an interpreted, high-level and general-purpose programming language.
          </p>
          <p>
            <a href="#lang" className="btn btn-danger btn-lg mybtn2" role="button">
              Scroll
            </a>
          </p>
        </div>
      </header>
      {/* Python Header, with title and caption END */}


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
                <div className="list-group-item list-group-item-action disabled titleBg-python text-dark">
                  Basics of Python <i className="fab fa-python"></i>
                  </div>
                {/* Python COURSE LINKS HERE / FIND AND ADD LINK HERE */}
                <a href="https://www.youtube.com/watch?v=_uQrJ0TkZlc&ab_channel=ProgrammingwithMosh" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Python Tutorial for Beginners | Full Python Programming Course<strong className="courseBy bg-light p-1 rounded m-1">Programming with Mosh</strong><strong className="badge badge-secondary p-1 rounded">Beginner</strong></a>
                <a href="https://www.youtube.com/watch?v=sxTmJE4k0ho&ab_channel=TechWithTim" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">The Complete Python Course For Beginners<strong className="courseBy bg-light p-1 rounded m-1">Tech With Tim</strong><strong className="badge badge-secondary p-1 rounded">Beginner</strong></a>
                <a href="https://www.youtube.com/playlist?list=PLS1QulWo1RIaJECMeUT4LFwJ-ghgoSH6n" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Python Tutorial for Absolute Beginners<strong className="courseBy bg-light p-1 rounded m-1">ProgrammingKnowledge</strong></a>
                <a href="https://www.youtube.com/watch?v=rfscVS0vtbw&ab_channel=freeCodeCamp.org" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Learn Python - Full Course for Beginners<strong className="courseBy bg-light p-1 rounded m-1">freeCodeCamp</strong></a>
                <a href="https://www.youtube.com/watch?v=kqtD5dpn9C8&t=1053s&ab_channel=ProgrammingwithMosh" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Python Tutorial - Python for Beginners [2020]<strong className="courseBy bg-light p-1 rounded m-1">Programming with Mosh</strong></a>
                <a href="https://www.youtube.com/watch?v=LzYNWme1W6Q&ab_channel=Amigoscode" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Python for Absolute Beginners [2020]<strong className="courseBy bg-light p-1 rounded m-1">Amigoscode</strong></a>

              </div>
              <br />
            </div>

            <div className="col-md-6">
              <div className="list-group">
                <div className="list-group-item list-group-item-action disabled titleBg-python text-dark">
                  Web Development Tutorials
                  </div>

                {/* Python COURSE LINKS HERE / FIND AND ADD LINK HERE */}
                {/* web  development */}
                <a href="https://www.youtube.com/watch?v=mqhxxeeTbu0&ab_channel=TechWithTim" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">How to Make Websites with Python | Tutorial #1<strong className="courseBy bg-light p-1 rounded m-1">Tech With Tim</strong></a>
                <a href="https://www.youtube.com/watch?v=F5mRW0jo-U4&ab_channel=freeCodeCamp.org" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Python Django Web Framework - Full Course for Beginners<strong className="courseBy bg-light p-1 rounded m-1">freeCodeCamp</strong></a>
                <a href="https://www.youtube.com/watch?v=Z1RJmh_OqeA&ab_channel=freeCodeCamp.org" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Learn Flask for Python - Full Tutorial<strong className="courseBy bg-light p-1 rounded m-1">freeCodeCamp</strong></a>
                <a href="https://pythonprogramming.net/web-development-tutorials/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Learn Django or Flask Tutorial<strong className="courseBy bg-light p-1 rounded m-1">pythonprogramming</strong></a>
                <a href="https://www.youtube.com/watch?v=-80wbZiSPRY&ab_channel=CS50" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Web Development with Python and Django<strong className="courseBy bg-light p-1 rounded m-1">Nicholas Wong</strong></a>
                <a href="https://www.youtube.com/watch?v=0VGJPg0SQIY&list=RDCMUCfzlCWGWYyIQ0aLC5w48gBQ&start_radio=1&t=15&ab_channel=sentdex" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Messages and Includes - Django Web Development with Python<strong className="courseBy bg-light p-1 rounded m-1">sentdex</strong></a>

              </div>
              <div className="alert alert-warning p-1 text-center">If you know any more tutorials, please do contact me!</div>
              <br />
              
            </div>
            

            <div className="col-md-6">
              <div className="list-group">
                <div className="list-group-item list-group-item-action disabled titleBg-python text-dark">
                  Games Development <i className="fas fa-gamepad-alt"></i>
                  </div>

                {/* Python COURSE LINKS HERE / FIND AND ADD LINK HERE */}
                {/* game development */}
                <a href="https://www.youtube.com/watch?v=FfWpgLFMI7w&ab_channel=freeCodeCamp.org" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Pygame Tutorial for Beginners<strong className="courseBy bg-light p-1 rounded m-1">freeCodeCamp</strong><strong className="badge badge-secondary p-1 rounded">Beginner</strong></a>
                <a href="https://www.youtube.com/watch?v=XGf2GcyHPhc&ab_channel=freeCodeCamp.org" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Learn Python by Building Five Games - Full Course<strong className="courseBy bg-light p-1 rounded m-1">freeCodeCamp</strong></a>
                <a href="https://www.youtube.com/watch?v=UZg49z76cLw&ab_channel=ClearCode" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Learning pygame by making Flappy Bird<strong className="courseBy bg-light p-1 rounded m-1">Clear Code</strong></a>
                <a href="https://www.youtube.com/watch?v=ujOTNg17LjI&list=PLQVvvaa0QuDdLkP8MrOXLe_rKuf6r80KO&ab_channel=sentdex" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Game Development in Python 3 With PyGame - Intro<strong className="courseBy bg-light p-1 rounded m-1">sentdex</strong></a>
                <a href="https://www.youtube.com/watch?v=C6jJg9Zan7w&ab_channel=freeCodeCamp.org" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Python Game Tutorial: Pong<strong className="courseBy bg-light p-1 rounded m-1">freeCodeCamp</strong></a>
                <a href="https://www.youtube.com/watch?v=CD4qAhfFuLo&ab_channel=freeCodeCamp.org" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Snake Game Python Tutorial<strong className="courseBy bg-light p-1 rounded m-1">freeCodeCamp </strong></a>
                <a href="https://www.youtube.com/watch?v=crV6T3piwHQ&ab_channel=TokyoEdTech" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Python Game Programming Tutorial: Space Invaders 1<strong className="courseBy bg-light p-1 rounded m-1">TokyoEdTech</strong></a>
                <a href="https://www.youtube.com/watch?v=m4nEnsavl6w&ab_channel=Kite" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">How to build HANGMAN with Python in 10 MINUTES<strong className="courseBy bg-light p-1 rounded m-1">Kite</strong></a>


              </div>
              <br />
            </div>


            <div className="col-md-6">
              <div className="list-group">
                <div className="list-group-item list-group-item-action disabled titleBg-python text-dark">
                  Machine Learning <i className="fas fa-robot"></i>
                  </div>

                {/* Python COURSE LINKS HERE / FIND AND ADD LINK HERE */}
                {/* machine learning development */}
                <a href="https://www.youtube.com/watch?v=7eh4d6sabA0&t=2648s&ab_channel=ProgrammingwithMosh" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Python Machine Learning Tutorial (Data Science)<strong className="courseBy bg-light p-1 rounded m-1">Programming with Mosh</strong></a>
                <a href="https://www.youtube.com/watch?v=qFJeN9V1ZsI&ab_channel=freeCodeCamp.org" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Keras with TensorFlow Course - Python Deep Learning and Neural Networks for Beginners Tutorial<strong className="courseBy bg-light p-1 rounded m-1">freeCodeCamp</strong></a>
                <a href="https://www.freecodecamp.org/learn/machine-learning-with-python/tensorflow/introduction-machine-learning-fundamentals" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">TensorFlow - Introduction: Machine Learning Fundamentals<strong className="courseBy bg-light p-1 rounded m-1">freeCodeCamp</strong></a>
                <a href="https://www.youtube.com/watch?v=OGxgnH8y2NM&list=PLQVvvaa0QuDfKTOs3Keq_kaG2P55YRn5v&index=1&ab_channel=sentdex" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Practical Machine Learning Tutorial with Python Intro<strong className="courseBy bg-light p-1 rounded m-1">sentdex </strong></a>
                <a href="/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action disabled">Searching..<strong className="courseBy bg-light p-1 rounded m-1">by</strong></a>



              </div>
              <br />
            </div>

            
            <div className="col-md-6">
              <div className="list-group">
                <div className="list-group-item list-group-item-action disabled titleBg-python text-dark">
                  Automation
                  </div>

                {/* Python COURSE LINKS HERE / FIND AND ADD LINK HERE */}
                {/* automation development */}
                <a href="https://www.youtube.com/watch?v=f7LEWxX4AVI&ab_channel=HiteshChoudhary" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Web automation in python for beginners<strong className="courseBy bg-light p-1 rounded m-1">Hitesh Choudhary</strong></a>
                <a href="https://www.youtube.com/watch?v=Xjv1sY630Uc&ab_channel=TechWithTim" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Python Selenium Tutorial #1 - Web Scraping, etc<strong className="courseBy bg-light p-1 rounded m-1">Tech With Tim</strong></a>
                <a href="https://www.youtube.com/watch?v=7J_qcttfnJA&ab_channel=TheComeUp" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Automate Spotify with Python<strong className="courseBy bg-light p-1 rounded m-1">The Come Up</strong></a>
                <a href="https://www.youtube.com/watch?v=Bg9r_yLk7VY&ab_channel=DevEd" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Build A Python App That Tracks Amazon Prices!<strong className="courseBy bg-light p-1 rounded m-1">Dev Ed</strong></a>
                <a href="https://www.youtube.com/watch?v=ng2o98k983k&ab_channel=CoreySchafer" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Python Tutorial: Web Scraping with BeautifulSoup and Requests <p><strong className="courseBy bg-light p-1 rounded">Corey Schafer</strong></p></a>
              </div>
              <br />
            </div>

          </div>
        </div>
        <br />
      </section>
      {/* FREE COURSES SECTION end */}
{/* START OF CONTAINER  */}
    <div className="container">
      <div className="jumbotron bg-dark">
        <h1 className="text-light">Get Started...</h1>
        <p className="lead">Before getting started, you may want to find out which <a href="#ide" className="text-primary ">IDEs</a> and text editors are tailored to make Python editing easy, browse the list of introductory books, or look at code samples that you might find helpful.</p>
        <a className="btn btn btn-danger" href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer" role="button">Download Python »</a>
      </div>
      <br/>

  </div>
{/* END OF CONTAINER  */}

      {/* Best IDE's and Framework section here. */}
      <section className="jumbotron jumbotron-fluid bg-ide-python" id="ide">
      <h3 className="text-center  text-dark">Recommended IDE for Python</h3>
      <br/>
      <div className="container ide-cards">
        {/* CARDS IN ROW AND CENTERING THE CARDS. */}
        <div className="row justify-content-center">

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


          {/* IDE START  */}
          <div className="card border-dark mb-3" style={{maxWidth:"16rem"}}>
            <div className="card-header"><a href="http://www.sublimetext.com/" className="ide-name text-info" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>Sublime Text</a></div>
            <div className="card-body text-dark">
            <img className="card-img-top" src="https://seekvectorlogo.net/wp-content/uploads/2020/02/sublime-text-vector-logo.png" alt="sublime text Logo" />
              <p className="ide-short card-text pt-3">Sublime Text is a shareware cross-platform source code editor with a Python application programming interface. It natively supports many programming languages and markup languages.</p>
              <h6 className="platform-name">Type - <span className="platform">Source Code Editor (Open-source)</span></h6>
            </div>
          </div>
          {/* IDE END  */}
          <div className="p-2"></div>

         {/* IDE START  */}
         <div className="card border-dark mb-3" style={{maxWidth:"16rem"}}>
            <div className="card-header"><a href="https://www.jetbrains.com/pycharm/" className="ide-name text-info" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>PyCharm</a></div>
            <div className="card-body text-dark">
            <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/PyCharm_Logo.svg/1024px-PyCharm_Logo.svg.png" alt="sublime text Logo" />
              <p className="ide-short card-text pt-3">PyCharm is an integrated development environment used in computer programming, specifically for the Python language. It is developed by the Czech company JetBrains</p>
              <h6 className="platform-name">Type - <span className="platform">Source Code Editor</span></h6>
            </div>
          </div>
          {/* IDE END  */}
          <div className="p-2"></div>

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



        </div>
        </div>


      </section>
        </div>
    )
}

export default Python
