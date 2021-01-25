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
          <h1 className="display-3">Java <i className="fab fa-java"></i></h1>
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
                <div className="list-group-item list-group-item-action disabled bg-danger text-light">
                  Basics of Java <i className="fab fa-java"></i>
                  </div>

                {/* JAVA COURSE LINKS HERE / FIND AND ADD LINK HERE */}
                <a href="https://www.codecademy.com/learn/learn-java" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Learn Java <strong className="courseBy bg-light p-1 rounded m-1">codecademy</strong><strong className="badge badge-light p-1 rounded">Beginner</strong></a>
                <a href="https://www.programiz.com/java-programming" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Learn Java Programming <strong className="courseBy bg-light p-1 rounded m-1"> Programiz</strong></a>
                <a href="https://www.edx.org/professional-certificate/uc3mx-introduction-java-programming" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Intro to Java <strong className="courseBy bg-light p-1 rounded m-1"> edX</strong></a>
                <a href="https://www.edx.org/learn/java" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">All Java Courses <strong className="courseBy bg-light p-1 rounded m-1">edX</strong></a>
                <a href="https://www.learnjavaonline.org/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action ">LearnJavaOnline.org <strong className="courseBy bg-light p-1 rounded m-1"> learnjavaonline</strong></a>
                <a href="https://www.youtube.com/watch?v=grEKMHGYyns&ab_channel=freeCodeCamp.org" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action ">9 Hour Java Content <strong className="courseBy bg-light p-1 rounded m-1">freeCodeCamp</strong></a>
                <a href="https://www.youtube.com/watch?v=eIrMbAQSU34&ab_channel=ProgrammingwithMosh" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action ">Java Tutorial <strong className="courseBy bg-light p-1 rounded m-1">Programming with Mosh</strong></a>
                <a href="https://www.youtube.com/watch?v=hBh_CC5y8-s&ab_channel=edureka%21" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action ">Java Full Course <strong className="courseBy bg-light p-1 rounded m-1">Edureka</strong></a>
                <a href="https://www.w3schools.com/java/java_intro.asp" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action ">  Java Introduction <strong className="courseBy bg-light p-1 rounded m-1">w3schools</strong></a>

              </div>
              <br />
            </div>


            <div className="col-md-6">
              <div className="list-group">
                <div className="list-group-item list-group-item-action disabled bg-danger text-light">
                  Mobile Applications
                  </div>

                {/* JAVA COURSE LINKS HERE / FIND AND ADD LINK HERE */}
                {/* moible app development */}
                <a href="https://developer.android.com/codelabs/build-your-first-android-app" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Build Your First Android App in Java</a>
                <a href="https://www.youtube.com/watch?v=tZvjSl9dswg&list=PL_c9BZzLwBRJLm0QETVj_XcN4jRsV4LkR&ab_channel=CalebCurry" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Android App Development in Java All-in-One Tutorial <strong className="courseBy bg-light p-1 rounded m-1">Caleb Curry</strong></a>
                <a href="https://www.youtube.com/watch?v=fis26HvvDII&t=12341s&ab_channel=freeCodeCamp.org" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Android Development for Beginners <strong className="courseBy bg-light p-1 rounded m-1">freecodecamp</strong></a>
                <a href="https://www.youtube.com/watch?v=dFlPARW5IX8&list=PLp9HFLVct_ZvMa7IVdQyUUyh8t2re9apm&ab_channel=BillButterfield" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action ">Android Studio For Beginners in parts by <strong className="courseBy bg-light p-1 rounded m-1">Bill Butterfield</strong></a>
                <a href="https://www.udemy.com/topic/android-development/free/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action ">Free Android Development Courses and Tutorials <strong className="courseBy bg-light p-1 rounded m-1"> Udemy</strong></a>
                <a href="https://developer.android.com/courses" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action ">Android Developers | Training <h5><strong className="h6 text-danger bg-light p-1 rounded m-1">Google</strong></h5></a>
                <a href="https://www.vogella.com/tutorials/android.html" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action ">Android Development Tutorials <strong className="courseBy bg-light p-1 rounded m-1">written content by Vogella</strong></a>
                

              </div>
              <br />
            </div>
            

            <div className="col-md-6">
              <div className="list-group">
                <div className="list-group-item list-group-item-action disabled bg-danger text-light">
                  Desktop Applications
                  </div>

                {/* JAVA COURSE LINKS HERE / FIND AND ADD LINK HERE */}
                {/* machine learning */}
                <a href="https://www.youtube.com/watch?v=qH9mWpYMtYU&ab_channel=freeCodeCamp.org" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Build a Java Desktop Application <strong className="courseBy bg-light p-1 rounded m-1">freeCodeCamp</strong></a>
                <a href="https://www.youtube.com/watch?v=60fdNF57X8U&ab_channel=PreciousPinedaBinas" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Creating a Simple Java Desktop Application <strong className="courseBy bg-light p-1 rounded m-1">Precious Pineda Binas</strong></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action disabled">Desktop Application</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action disabled ">Desktop Application</a>
                <div className="alert alert-warning" role="alert">
                  More will be added soon.
                </div>

              </div>
              <br />
            </div>


            <div className="col-md-6">
              <div className="list-group">
                <div className="list-group-item list-group-item-action disabled bg-danger text-light  ">
                  Games Development with Java
                  </div>

                {/* JAVA COURSE LINKS HERE / FIND AND ADD LINK HERE */}
                {/* game development */}
                <a href="http://zetcode.com/javagames/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Java 2D games <strong className="courseBy bg-light p-1 rounded m-1">zetcode</strong></a>
                <a href="https://gamedevelopment.tutsplus.com/categories/java" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Game Development Tutorials (projects)<strong className="courseBy bg-light p-1 rounded m-1">envatotuts</strong></a>
                <a href="https://www.youtube.com/watch?v=K9qMm3JbOH0&ab_channel=AwaisMirza" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">Develop a Brick Breaker Game <strong className="courseBy bg-light p-1 rounded m-1">Awais Mirza</strong></a>
                <a href="https://www.youtube.com/watch?v=lDzKX3djE-M&ab_channel=MarcusDubreuil" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action ">Java game programming tutorial - 7hours <strong className="courseBy bg-light p-1 rounded m-1">Marcus Dubreuil</strong></a>
                <a href="https://www.youtube.com/watch?v=_SqnzvJuKiA&ab_channel=AwaisMirza" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action ">Snake Game Tutorial <strong className="courseBy bg-light p-1 rounded m-1">Awais Mirza</strong></a>
                <a href="https://www.youtube.com/watch?v=I1qTZaUcFX0&ab_channel=JarytBustard" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action ">Flappy Bird in Java! <strong className="courseBy bg-light p-1 rounded m-1">Jaryt Bustard</strong></a>

              </div>
              <br />
            </div>
          </div>
        </div>
        <br />
      </section>
      {/* FREE COURSES SECTION end */}

      {/* Best IDE's and Framework section here. */}
      <section className="programming-ide">
      <br />
      <h3 className="text-center subtitleIDE">Best Java IDE</h3>
      <div className="alert alert-dark p-1 col-md-5 text-center m-md-auto"  role="alert">
           Here are some recommended IDE's you can use for your Java projects.
      </div>
      <br/>

      <div className="container ide-cards">
        {/* CARDS IN ROW AND CENTERING THE CARDS. */}
        <div className="row justify-content-center">
          {/* IDE START  */}
          <div className="card border-dark mb-3" style={{maxWidth:"16rem"}}>
            <div className="card-header"><a href="https://www.eclipse.org/ide/" target="_blank" rel="noopener noreferrer" className="ide-name" style={{textDecoration: "none"}}>Eclipse</a></div>
            <div className="card-body text-dark">
            <img className="card-img-top" src="https://hackr.io/blog/uploads/images/1570190912ejVgFUpgFq.jpg" alt="Eclipse hackr.io image" />
              <p className="ide-short card-text pt-3">A dedicated Java IDE, Eclipse gets listed as one of the big three of Java IDEs. The modern integrated development environment is available in both desktop and cloud editions.</p>
              <h6 className="platform-name">Platform - <span className="platform">Linux/macOS/Solaris/Windows</span></h6>
            </div>
          </div>
          {/* IDE END  */}
          <div className="p-2"></div>

          {/* IDE START  */}
          <div className="card border-dark mb-3" style={{maxWidth:"16rem"}}>
            <div className="card-header"><a href="https://netbeans.org/downloads/" target="_blank" rel="noopener noreferrer" className="ide-name" style={{textDecoration: "none"}}>NetBeans</a></div>
            <div className="card-body text-dark">
            <img className="card-img-top" src="https://financesonline.com/uploads/2019/09/netbeans-logo1.png" alt="Netbeans logo" />
              <p className="ide-short card-text pt-1">NetBeans is the official IDE for Java 8. The open-source IDE facilitates Java programmers to build desktop, mobile, and web applications by offering a range of potent tools and features.</p>
              <h6 className="platform-name">Platform - <span className="platform">Linux/macOS/Solaris/Windows</span></h6>
            </div>
          </div>
          {/* IDE END  */}
          <div className="p-2"></div>

          {/* IDE START  */}
          <div className="card border-dark mb-3" style={{maxWidth:"16rem"}}>
            <div className="card-header"><a href="https://www.jetbrains.com/idea/download/#section=windows" target="_blank" rel="noopener noreferrer" className="ide-name" style={{textDecoration: "none"}}>IntelliJ IDEA</a></div>
            <div className="card-body text-dark">
            <img className="card-img-top" src="https://financesonline.com/uploads/2019/08/IntelliJ-Idea-logo1.png" alt="IntelliJ IDEA logo" />
              <p className="ide-short card-text pt-1">IntelliJ IDEA is one of the big three of Java IDEs. It is available in 2 different editions, an Apache 2 Licensed community edition, and a proprietary commercial edition.</p>
              <h6 className="platform-name">Platform - <span className="platform">Linux/macOS/Windows</span></h6>
            </div>
          </div>
          {/* IDE END  */}
          <div className="p-2"></div>

          {/* IDE START  */}
          <div className="card border-dark mb-3" style={{maxWidth:"16rem"}}>
            <div className="card-header"><a href="https://www.bluej.org/" target="_blank" rel="noopener noreferrer" className="ide-name" style={{textDecoration: "none"}}>BlueJ</a></div>
            <div className="card-body text-dark">
            <img className="card-img-top" src="https://financesonline.com/uploads/2019/10/BlueJ-logo1.png" alt="BlueJ logo" />
              <p className="ide-short card-text pt-1">BlueJ is an (integrated development environment) IDE for Java. Though mainly designed with educational intent, BlueJ is apt for small-scale software development.</p>
              <h6 className="platform-name">Platform - <span className="platform">Linux/macOS/Windows</span></h6>
            </div>
          </div>
        {/* IDE END  */}
        <div className="p-2"></div>

        {/* IDE START  */}
        <div className="card border-dark mb-3" style={{maxWidth:"16rem"}}>
            <div className="card-header"><a href="https://www.oracle.com/tools/downloads/jdeveloper-12c-downloads.html"  target="_blank" rel="noopener noreferrer" className="ide-name" style={{textDecoration: "none"}}>(Oracle) JDeveloper</a></div>
            <div className="card-body text-dark">
            <img className="card-img-top" src="https://i.pinimg.com/originals/48/b7/11/48b711a19d0b328741b76f3e85f614b2.png" alt="(Oracle) JDeveloper logo" />
              <p className="ide-short card-text pt-1">JDeveloper is a freeware Java IDE by Oracle. It offers an integrated development framework with a plethora of features and several visual development tools.</p>
              <h6 className="platform-name">Platform - <span className="platform">Linux/macOS/Windows</span></h6>
            </div>
          </div>
        {/* IDE END  */}
        <div className="p-2"></div>

        {/* IDE START  */}
        <div className="card border-dark mb-3" style={{maxWidth:"16rem"}}>
            <div className="card-header"><a href="http://www.drjava.org/" target="_blank" rel="noopener noreferrer" className="ide-name" style={{textDecoration: "none"}}>DrJava</a></div>
            <div className="card-body text-dark">
            <img className="card-img-top" src="http://www.drjava.org/splash.png" alt="DrJava logo" />
              <p className="ide-short card-text pt-2">Maintained by the JavaPLT group at Rice University, DrJava is a lightweight Java Integrated Development Environment. Specifically developed for beginners and students.</p>
              <h6 className="platform-name">Platform - <span className="platform">Linux/macOS/Windows</span></h6>
            </div>
          </div>
        {/* IDE END  */}
        <div className="p-2"></div>


        {/* IDE START  */}
        <div className="card border-dark mb-3" style={{maxWidth:"16rem"}}>
            <div className="card-header"><a href="http://www.jcreator.org/download.htm" target="_blank" rel="noopener noreferrer" className="ide-name" style={{textDecoration: "none"}}>JCreator</a></div>
            <div className="card-body text-dark">
            <img className="card-img-top" src="https://softwarereviews.s3.amazonaws.com/production/logos/offerings/3573/original/3674ac04-b031-488d-a450-cdc642440500xinox_logo.gif?1516292336" alt="JCreator logo" />
              <p className="ide-short card-text pt-3">Developed by Xerox Software, JCreator is yet another lightweight Java IDE. JCreator flaunts an interface much similar to Microsoft’s Visual Studio.</p>
              <h6 className="platform-name">Platform - <span className="platform">Linux (via Wine)/Windows</span></h6>
            </div>
          </div>
        {/* IDE END  */}
        <div className="p-2"></div>

        </div>
        </div>
      </section>
      {/* Best IDE's and Framework section here. END */}


    {/* Future recommended books idea! */}

    </div>

  );
}


export default Java;
