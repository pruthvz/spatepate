import React, {useEffect} from 'react'
// Import Page Stylings
import "../styles/Developers.css"


// Developers component with all the epic YouTube developers.
function Developers() {
  // Change Browser Title.
  useEffect(() =>{
    document.title="Developers - spatepate"
}, [])

    return (
        <div>
            {/* PAGE HEADER, WITH TITLE AND CAPTION start */}
            <header className="jumbotron jumbotron-fluid bg-dark">
                <div className="container-fluid text-center">
                <h1 className="display-3">Epic Developers </h1>
                <p className="lead pb-4">
                Go subscribe to these developers, they provide great tutorials and content!
                </p>
                {/* <p>
                    <a href="#lang" className="btn btn-danger btn-lg mybtn3" role="button">
                    Scroll
                    </a>
                </p> */}
                </div>
        </header>
        {/* PAGE HEADER, WITH TITLE AND CAPTION end */}
        
        {/* DEVELOPERS SECTION START */}
        <section className="developers">
        <div className="container">
        <div className="col-lg-12">
              {/* Section title, and sub-title */}
              <div className="section-title">
                <h1 className="title">GO SUBSCRIBE</h1>
                <p className="subtitle">Check these amazing developers</p> 
              </div>
            </div>

          {/* Developers list START */}
          <p className="no-order alert alert-danger col-md-12">I love all these developers, so there is no particular order!</p>
          <div className="row">
            <div className="col-md-12">
              <div className="list-group">
                  <div className="list-group-item list-group-item-action disabled bg-danger card-title">
                    Developers 
                    <p></p>
                  </div>

                  {/* YouTuber Name, with Verified Tick, re-directed link */}
                  <div  className="list-group-item list-group-item-action">Dev Ed <i className="fas fa-check-circle"></i> <span className="sub-headings"> /Learn web development, web design, 3d modelling, tools like figma and more without getting bored!</span>
                  <a href="https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">freeCodeCamp.org <i className="fas fa-check-circle"></i> <span className="sub-headings">/Learn to code for free.</span>
                  <a href="https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div className="list-group-item list-group-item-action">Traversy Media <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Fireship <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Nick White <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UC1fLEeYICmo3O9cUsqIi7HA" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div className="list-group-item list-group-item-action">Kalle Hallden <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UCWr0mx597DnSGLFk1WfvSkQ" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div className="list-group-item list-group-item-action">Will Kwan <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UCTjPBE9BNsmv44wgxWEy2zw" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Tech With Tim <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UC4JX40jDee_tINbkjycV4Sg" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Programming with Mosh <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div className="list-group-item list-group-item-action">Jabrils <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UCQALLeQPoZdZC4JNUboVEUg" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div className="list-group-item list-group-item-action">TechLead <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UC4xKdmAXFh4ACyhpiQ_3qBw" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Web Dev Simplified <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">CodingPhase
                  <a href="https://www.youtube.com/channel/UC46wWUso9H5KPQcoL9iE3Ug" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Ben Awad
                  <a href="https://www.youtube.com/channel/UC-8QAzbLcRglXeN_MY9blyw" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">LevelUpTuts
                  <a href="https://www.youtube.com/channel/UCyU5wkjgQYGRB0hIHMwm2Sg" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div className="list-group-item list-group-item-action">ProgrammingKnowledge <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UCs6nmQViDpUw0nuIx9c_WvA" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Dani Krossing
                  <a href="https://www.youtube.com/channel/UCzyuZJ8zZ-Lhfnz41DG5qLw" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Stefan Mischook
                  <a href="https://www.youtube.com/c/StefanMischook/featured" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Coder Foundry
                  <a href="https://www.youtube.com/channel/UCTGgxc_jIz2z9mpfInuPHWQ" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">sentdex <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UCfzlCWGWYyIQ0aLC5w48gBQ" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Devon Crawford <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UCDrekHmOnkptxq3gUU0IyfA" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div className="list-group-item list-group-item-action">CS Dojo <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UCxX9wt5FWQUAAz4UrysqK9A" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div className="list-group-item list-group-item-action">edureka! <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UCkw4JCwteGrDHIsyIIKo4tQ" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Simple Snippets <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UCRIWTSgd7hGtZhx4RYoASEg" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div className="list-group-item list-group-item-action">Udemy Tech <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UCU6e4MJtvlcX5DBLP1cq8hQ" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">howCode
                  <a href="https://www.youtube.com/channel/UCovR8D97-8qmQ8hWQW0d3ew" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">ForrestKnight <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UC2WHjPDvbE6O328n17ZGcfg" className="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Academind  <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">The Net Ninja <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">LearnCode.academy <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UCVTlvUkGslCV_h-nSAId8Sw" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Awais Mirza
                  <a href="https://www.youtube.com/channel/UCIKbbV7ae7LAWa8cGnvjSPA" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Caleb Curry
                  <a href="https://www.youtube.com/user/CalebTheVideoMaker2" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">ENTER NAME
                  <a href="#" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>


                </div>
                <br/>
            </div>
          {/* Developers list START */}


            {/* Game Developers START */}
            <div className="col-md-12">
              <div className="list-group">
                  <div className="list-group-item list-group-item-action disabled bg-danger card-title">
                    Game Developers 
                  </div>

                  {/* YouTuber Name, with Verified Tick, re-directed link */}
                  <div  className="list-group-item list-group-item-action">Brackeys <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UCYbK_tjZ2OrIZFBvU6CCMiA" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Dani <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UCIabPXjvT5BVTxRDPCBBOOQ" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Blackthornprod <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UC9Z1XWw1kmnvOOFsj6Bzy2g" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Sam Hogan <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UCORkUj9eaM2aDJM1VYyDDTA" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Dev Duck 
                  <a href="https://www.youtube.com/channel/UCKCTmact-90hXpV2ns8GSsA" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Awesome Tuts
                  <a href="https://www.youtube.com/channel/UC5c-DuzPdH9iaWYdI0v0uzw" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Thomas Brush <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UCuHVjteDW9tCb8QqMrtGvwQ" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Sykoo <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UCNJvwJ6daLmw4_gUKTw4cSg" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">RealTutsGML
                  <a href="https://www.youtube.com/channel/UCOs7Q7IeuzgRyARaEqif75A" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Pixel Pete
                  <a href="https://www.youtube.com/channel/UC7OO80qJzGTLOj_6-0dmOiA" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">BenBonk
                  <a href="https://www.youtube.com/channel/UCLO_c9nyLCwohHqovjlmpDw" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">ThinMatrix 
                  <a href="https://www.youtube.com/channel/UCUkRj4qoT1bsWpE_C8lZYoQ" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div className="list-group-item list-group-item-action">GucioDevs
                  <a href="https://www.youtube.com/channel/UC4MDTn6WkqvBfBW_4cFZp2g" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">GameGrind
                  <a href="https://www.youtube.com/channel/UCTY3kks3U4RDvpMX87fvo1A" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Ask Gamedev <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UCd_lJ4zSp9wZDNyeKCWUstg" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Jonas Tyroller
                  <a href="https://www.youtube.com/channel/UC_p_9arduPuxM8DHTGIuSOg" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Randall 
                  <a href="https://www.youtube.com/channel/UCUmLRMERmJrmUtgnbFfknAg" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">ENTER NAME
                  <a href="#" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

<br/>
                  {/* Godot Developers sub-list */}
                  <div className="list-group-item list-group-item-action disabled bg-custom card-title">
                    Godot Developers
                  </div>
                  <div  className="list-group-item list-group-item-action">HeartBeast
                  <a href="https://www.youtube.com/channel/UCrHQNOyU1q6BFEfkNq2CYMA" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>
               
                  <div  className="list-group-item list-group-item-action">KidsCanCode
                  <a href="https://www.youtube.com/c/KidscancodeOrg/videos" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>
                  
                  <div  className="list-group-item list-group-item-action">GDQuest
                  <a href="https://www.youtube.com/channel/UCxboW7x0jZqFdvMdCFKTMsQ" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Mister Taft Creates
                  <a href="https://www.youtube.com/c/MisterTaftCreates" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Game Endeavor
                  <a href="https://www.youtube.com/c/GameEndeavor/about" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div  className="list-group-item list-group-item-action">Pigdev
                  <a href="https://www.youtube.com/channel/UCFK9ZoVDqDgY6KGMcHEloFw" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>


                </div>
                <br/>
            </div>
            {/* Game Developers END */}

            
            {/* UI/UX Designers START */}
            <div className="col-md-12">
              <div className="list-group">
                  <div className="list-group-item list-group-item-action disabled bg-danger card-title">
                    UI/UX Designers 
                  </div>

                  {/* YouTuber Name, with Verified Tick, re-directed link */}
                  <div className="list-group-item list-group-item-action">DesignCourse <i className="fas fa-check-circle"></i> <span className="badge badge-pill badge-primary">BEST</span>
                  <a href="https://www.youtube.com/user/DesignCourse" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div href="#" className="list-group-item list-group-item-action">Caler Edwards <i className="fas fa-check-circle"></i>
                  <a href="https://www.youtube.com/channel/UCfzOLBT7jyHFcaTgwmnttog"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                  <div className="list-group-item list-group-item-action">DesignCode
                  <a href="https://www.youtube.com/channel/UCTIhfOopxukTIRkbXJ3kN-g" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>
                  
                  <div href="#" className="list-group-item list-group-item-action">ENTER NAME
                  <a href="#" target="_blank" rel="noopener noreferrer"><span className="badge badge-danger badge-pill pull-right col-md-2">SUBSCRIBE</span></a></div>

                </div>
                <br/>
            </div>
            {/* UI/UX Designers END */}

                {/* Add new developers that I've missed out */}
                <p className=" alert alert-danger p-2 col-md-12">If I've missed anyone please leave a comment</p>

          </div>
        </div>
        <br/>
      </section>
      {/* DEVELOPERS SECTION END */}

      </div>
    )
}

export default Developers
