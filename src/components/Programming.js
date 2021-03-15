import React, { useState, useEffect } from "react";
import "./styles/Resource.css";
import { Link } from "react-router-dom";

const Programming = () => {
     // Change the browser title.
  useEffect(() =>{
    document.title="spatepate - programming"
}, [])
  const [input, setInput] = useState("");
  let programmingLanguages = [
    {
      name: "Python",
      link: "./language/learn-python",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/600px-Python-logo-notext.svg.png",
      imgAlt: "python logo",
    },
    {
      name: "Java",
      link: "./language/learn-java",
      img:
        "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png",
      imgAlt: "java logo",
    },
    {
      name: "JavaScript",
      link: "./language/learn-javascript",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
      imgAlt: "javascript logo",
    },
    {
      name: "C++",
      link: "./language/learn-cplusplus",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
      imgAlt: "c++ logo",
    },
    {
      name: "C#",
      link: "./language/learn-Csharp",
      img: "https://logodix.com/logo/773624.png",
      imgAlt: "c# logo",
    },
    {
      name: "Swift",
      link: "./language/learn-swift",
      img:
        "https://img.deusm.com/informationweek/2015/09/1322066/Swift_logo.png",
      imgAlt: "swift logo",
    },
    {
      name: "Kotlin",
      link: "./language/learn-kotlin",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin-logo.svg/768px-Kotlin-logo.svg.png",
      imgAlt: "kotlin logo",
    },
    {
      name: "TypeScript",
      link: "./language/learn-typescript",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
      imgAlt: "TypeScript logo",
    },
    {
      name: "Go",
      link: "./language/learn-go",
      img: "https://sdtimes.com/wp-content/uploads/2018/02/golang.sh_.png",
      imgAlt: "Go logo",
    },
    {
      name: "PHP",
      link: "./language/learn-php",
      img: "https://www.php.net/images/logos/new-php-logo.svg",
      imgAlt: "php logo",
    },
    {
      name: "",
      link: "./language/learn-unity",
      img:
        "https://logos-download.com/wp-content/uploads/2016/09/Unity_logo_logotype_Unity_3D.png",
      imgAlt: "unity logo",
    },
    {
      name: "React",
      link: "./language/learn-react",
      img: "https://cdn.auth0.com/blog/react-js/react.png",
      imgAlt: "react.js logo",
    },
  ];

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  if (input.length > 0) {
    programmingLanguages = programmingLanguages.filter((i) => {
      return i.name.toLowerCase().match(input);
    });
  }

  return (
    <section className="programming-section">
      <h1 className="programming-title text-center">
        Find Your Programming Courses & Tutorials
      </h1>
      <div className="container">
        <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
          <div className="input-group">
            <div className="input-group-prepared">
              <button
                id="button-addon2"
                type="submit"
                className="btn btn-link text-primary"
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
            <input
              type="text"
              placeholder="Search for the language.. e.g. Python"
              aria-describedby="button-addon2"
              className="form-control border-0 bg-light"
              onChange={handleChange}
              value={input}
            ></input>
          </div>
        </div>

        <div className="row mx-auto">
          {programmingLanguages.map(function (lang, index) {
            return (
              <div className="col-md-4">
                <div className="lang-card row rounded" key={index}>
                  <div className="lang-img">
                    <Link to={lang.link}>
                      <img src={lang.img} alt={lang.imgAlt} />
                    </Link>
                  </div>
                  {/* Programming title / name */}
                  <Link to={lang.link}>
                    <h4>{lang.name}</h4>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programming;
