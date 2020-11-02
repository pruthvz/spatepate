import React, {useEffect} from 'react'
// Import Page styles
import "../styles/Resource.css"

// Importing Images
import codecademy from "../../images/codecademy.png"
import freecodecamp from "../../images/freecodecamp.png"
import udemy from "../../images/udemy.jpg"
import edx from "../../images/edx.jpg"



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

                </div> 
                 

            </section>
            {/* Resources section END */}
            
            {/* MORE RESOURCES TO FIND AND ADD. */}
            <p className="text-center p-3 bg-danger" style={{color: "white"}}>more sites to be added!</p>
        </div>
    )
}

export default Resources

