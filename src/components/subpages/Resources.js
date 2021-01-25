import React, {useEffect} from 'react'
// Import Page styles
import "../styles/Resource.css"

// Importing Images
import codecademy from "../../images/codecademy.png"
import freecodecamp from "../../images/freecodecamp.png"
import udemy from "../../images/udemy.jpg"
import edx from "../../images/edx.jpg"
import coursera from "../../images/coursera.png"
import w3schools from "../../images/w3schools.png"
import code from "../../images/code.jpg"
import sololearn from "../../images/sololearn.png"
import bitdegree from "../../images/bitdegree.jpg"








// Resources function START
function Resources() {
    // Change Browser Title.
    useEffect(() =>{
        document.title="Resources - spatepate"
    }, [])

    return (
        <div>
            {/* Page Header, with title and caption */}
            <header className="jumbotron jumbotron-fluid bg-dark">
                <div className="container-fluid text-center">
                <h1 className="display-3">Resources </h1>
                <p className="lead pb-4">
                We will redirect you to some of the best website that provide the best help!
                </p>
                </div>
            </header>

            {/* Resources section START */}
            <section className="resources-section">
                <div className="container">
                    <br/>
                    {/* BOOTSTRAP CARDS */}

                    {/* BitDegree */}
                    <div className="row no-gutters bg-light position-relative">
                        {/* img */}
                        <div className="col-md-6 mb-md-0 p-md-4">
                            <img src={bitdegree} className="w-100" alt="codecademy online"/>
                        </div>
                        {/* Title, Caption, Link */}
                        <div className="col-md-6 position-static p-4 pl-md-0">
                            <h5 className="mt-0">BitDegree</h5>
                            <p>Looking for the best online courses? Click here and gain or improve digital skills on our eLearning platform. Enroll in the best online courses today!</p>
                            <a href="https://www.bitdegree.org/learn/" target="_blank" rel="noopener noreferrer" className="stretched-link">Visit BitDegree</a>
                        </div>
                    </div>

                    {/* CODECADEMY */}
                    <div className="row no-gutters bg-light position-relative">
                        {/* img */}
                        <div className="col-md-6 mb-md-0 p-md-4">
                            <img src={codecademy} className="w-100" alt="codecademy online"/>
                        </div>
                        {/* Title, Caption, Link */}
                        <div className="col-md-6 position-static p-4 pl-md-0">
                            <h5 className="mt-0">Codecademy</h5>
                            <p>Codecademy is an American online interactive platform that offers free coding classes in 12 different programming languages including Python, Java, Go, JavaScript, Ruby, SQL, C++, C#, Swift, and Sass, as well as markup languages HTML and CSS.</p>
                            <a href="https://www.codecademy.com/learn" target="_blank" rel="noopener noreferrer" className="stretched-link">Visit Codecademy</a>
                        </div>
                    </div>

                    {/* FREECODECAMP */}
                    <div className="row no-gutters bg-light position-relative">
                        {/* img */}
                        <div className="col-md-6 mb-md-0 p-md-4">
                            <img src={freecodecamp} className="w-100" alt="freeCodeCamp, online courses."/>
                        </div>
                        {/* Title, Caption, Link */}
                        <div className="col-md-6 position-static p-4 pl-md-0">
                            <h5 className="mt-0">freeCodeCamp</h5>
                            <p>freeCodeCamp is a non-profit organization that consists of an interactive learning web platform, an online community forum, chat rooms, online publications and local organizations that intend to make learning web development accessible to anyone.</p>
                            <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer" className="stretched-link">Visit freeCodeCamp</a>
                        </div>
                    </div>

                    {/* UDEMY */}
                    <div className="row no-gutters bg-light position-relative">
                        {/* img */}
                        <div className="col-md-6 mb-md-0 p-md-4">
                            <img src={udemy} className="w-100" alt="Udemy -Programming"/>
                        </div>
                        {/* Title, Caption, Link */}
                        <div className="col-md-6 position-static p-4 pl-md-0">
                            <h5 className="mt-0">Udemy</h5>
                            <p>Udemy has lots of programming courses, there are some which are free and some which are paid courses. Udemy provides not only programming courses but many more, in different categories. </p>
                            <a href="https://www.udemy.com/courses/development/programming-languages/" target="_blank" rel="noopener noreferrer" className="stretched-link">Visit Udemy -Programming</a>
                        </div>
                    </div>

                    {/* sololearn */}
                    <div className="row no-gutters bg-light position-relative">
                        {/* img */}
                        <div className="col-md-6 mb-md-0 p-md-4">
                            <img src={sololearn} className="w-100" alt="edX"/>
                        </div>
                        {/* Title, Caption, Link */}
                        <div className="col-md-6 position-static p-4 pl-md-0">
                            <h5 className="mt-0">SoloLearn</h5>
                            <p>SoloLearn is a series of free apps that allows users to learn a variety of programming languages and concepts through short lessons, code challenges, and quizzes. Lessons are written with the beginner in mind, so anyone can learn to read and write their own code.</p>
                            <a href="https://www.sololearn.com/Courses/" target="_blank" rel="noopener noreferrer" className="stretched-link">Visit SoloLearn</a>
                        </div>
                    </div>


                    {/* EDX */}
                    <div className="row no-gutters bg-light position-relative">
                        {/* img */}
                        <div className="col-md-6 mb-md-0 p-md-4">
                            <img src={edx} className="w-100" alt="edX"/>
                        </div>
                        {/* Title, Caption, Link */}
                        <div className="col-md-6 position-static p-4 pl-md-0">
                            <h5 className="mt-0">edX</h5>
                            <p>edX is an American massive open online course provider created by Harvard and MIT. It hosts online university-level courses in a wide range of disciplines to a worldwide student body, including some courses at no charge. It also conducts research into learning based on how people use its platform. </p>
                            <a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer" className="stretched-link">Visit edX</a>
                        </div>
                    </div>

                    {/* coursera */}
                    <div className="row no-gutters bg-light position-relative">
                        {/* img */}
                        <div className="col-md-6 mb-md-0 p-md-4">
                            <img src={coursera} className="w-100" alt="edX"/>
                        </div>
                        {/* Title, Caption, Link */}
                        <div className="col-md-6 position-static p-4 pl-md-0">
                            <h5 className="mt-0">Coursera</h5>
                            <p>Join Coursera for free and learn online. Build skills with courses from top universities like Yale, Michigan, Stanford, and leading companies like Google and IBM.</p>
                            <a href="https://www.coursera.org/courses?query=coding" target="_blank" rel="noopener noreferrer" className="stretched-link">Visit Coursera</a>
                        </div>
                    </div>

                    {/* w3schools */}
                    <div className="row no-gutters bg-light position-relative">
                        {/* img */}
                        <div className="col-md-6 mb-md-0 p-md-4">
                            <img src={w3schools} className="w-100" alt="edX"/>
                        </div>
                        {/* Title, Caption, Link */}
                        <div className="col-md-6 position-static p-4 pl-md-0">
                            <h5 className="mt-0">w3schools</h5>
                            <p>W3Schools is an educational website for learning web technologies online. Content includes tutorials and references relating to HTML, CSS, JavaScript, JSON, PHP, Python, AngularJS, React.js, SQL, Bootstrap, Sass, Node.js, jQuery, XQuery, AJAX, XML, Raspberry Pi, C++, C# and Java.</p>
                            <a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer" className="stretched-link">Visit w3schools</a>
                        </div>
                    </div>


                    {/* codeconquest */}
                    <div className="row no-gutters bg-light position-relative">
                        {/* img */}
                        <div className="col-md-6 mb-md-0 p-md-4">
                            <img src={code} className="w-100" alt="edX"/>
                        </div>
                        {/* Title, Caption, Link */}
                        <div className="col-md-6 position-static p-4 pl-md-0">
                            <h5 className="mt-0">codeconquest</h5>
                            <p>Welcome to Code Conquest – a free online guide to coding for beginners. If you’re someone who wants to learn about coding, but you haven’t got a clue where to start, you’ve come to the right place. This site has all the step-by-step information you need to get started.</p>
                            <a href="https://www.codeconquest.com/tutorials/" target="_blank" rel="noopener noreferrer" className="stretched-link">Visit codeconquest</a>
                        </div>
                    </div>

                    

                </div> 
                 

            </section>
            {/* Resources section END */}
            
            {/* MORE RESOURCES TO FIND AND ADD. */}
            <p className="text-center p-3 bg-danger" style={{color: "white"}}>more sites to be added!</p>
        </div>
    )
}

export default Resources

