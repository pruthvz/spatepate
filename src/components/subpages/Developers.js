import React, {useEffect, useState} from 'react'
// Import Page Stylings
import "../styles/Developers.css"


// Developers component with all the epic YouTube developers.
function Developers() {
  // DEVELOPERS ARRAY
  let developers = [
    {name: "Dev Ed", ytlink: "https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q", tick:"tick3 fas fa-check-circle"},
    {name: "freeCodeCamp.org", ytlink: "https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ", tick:"tick3 fas fa-check-circle"},
    {name: "Traversy Media", ytlink: "https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA", tick:"tick3 fas fa-check-circle"},
    {name: "Fireship", ytlink: "https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA", tick:"tick3 fas fa-check-circle"},
    {name: "Nick White", ytlink: "https://www.youtube.com/channel/UC1fLEeYICmo3O9cUsqIi7HA", tick:"tick3 fas fa-check-circle"},
    {name: "Kalle Hallden", ytlink: "https://www.youtube.com/channel/UCWr0mx597DnSGLFk1WfvSkQ", tick:""},
    {name: "Will Kwan", ytlink: "https://www.youtube.com/channel/UCTjPBE9BNsmv44wgxWEy2zw", tick:""},
    {name: "Tech With Tim", ytlink: "https://www.youtube.com/channel/UC4JX40jDee_tINbkjycV4Sg", tick:""},
    {name: "Programming with Mosh", ytlink: "https://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA", tick:""},
    {name: "Jabrils", ytlink: "https://www.youtube.com/channel/UCQALLeQPoZdZC4JNUboVEUg", tick:""},
    {name: "TechLead", ytlink: "https://www.youtube.com/channel/UC4xKdmAXFh4ACyhpiQ_3qBw", tick:""},
    {name: "Web Dev Simplified", ytlink: "https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw", tick:""},
    {name: "CodingPhase", ytlink: "https://www.youtube.com/channel/UC46wWUso9H5KPQcoL9iE3Ug", tick:""},
    {name: "Ben Awad", ytlink: "https://www.youtube.com/channel/UC-8QAzbLcRglXeN_MY9blyw", tick:""},
    {name: "LevelUpTuts", ytlink: "https://www.youtube.com/channel/UCyU5wkjgQYGRB0hIHMwm2Sg", tick:""},
    {name: "ProgrammingKnowledge", ytlink: "https://www.youtube.com/channel/UCs6nmQViDpUw0nuIx9c_WvA", tick:""},
    {name: "Dani Krossing", ytlink: "https://www.youtube.com/channel/UCzyuZJ8zZ-Lhfnz41DG5qLw", tick:""},
    {name: "Stefan Mischook", ytlink: "https://www.youtube.com/c/StefanMischook/featured", tick:""},
    {name: "Coder Foundry", ytlink: "https://www.youtube.com/channel/UCTGgxc_jIz2z9mpfInuPHWQ", tick:""},
    {name: "sentdex", ytlink: "https://www.youtube.com/channel/UCfzlCWGWYyIQ0aLC5w48gBQ", tick:""},
    {name: "Devon Crawford", ytlink: "https://www.youtube.com/channel/UCDrekHmOnkptxq3gUU0IyfA", tick:""},
    {name: "CS Dojo", ytlink: "https://www.youtube.com/channel/UCxX9wt5FWQUAAz4UrysqK9A", tick:""},
    {name: "edureka!", ytlink: "https://www.youtube.com/channel/UCkw4JCwteGrDHIsyIIKo4tQ", tick:""},
    {name: "Simple Snippets", ytlink: "https://www.youtube.com/channel/UCRIWTSgd7hGtZhx4RYoASEg", tick:""},
    {name: "Udemy Tech", ytlink: "https://www.youtube.com/channel/UCU6e4MJtvlcX5DBLP1cq8hQ", tick:""},
    {name: "howCode", ytlink: "https://www.youtube.com/channel/UCovR8D97-8qmQ8hWQW0d3ew", tick:""},
    {name: "ForrestKnight", ytlink: "https://www.youtube.com/channel/UC2WHjPDvbE6O328n17ZGcfg", tick:""},
    {name: "Academind", ytlink: "https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w", tick:""},
    {name: "The Net Ninja", ytlink: "https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg", tick:""},
    {name: "LearnCode.academy", ytlink: "https://www.youtube.com/channel/UCVTlvUkGslCV_h-nSAId8Sw", tick:""},
    {name: "Awais Mirza", ytlink: "https://www.youtube.com/channel/UCIKbbV7ae7LAWa8cGnvjSPA", tick:""},
    {name: "Caleb Curry", ytlink: "https://www.youtube.com/user/CalebTheVideoMaker2", tick:""},
    // {name: "name", ytlink: "link", tick:""},

  ]

let gamedevelopers = [
  {name: "Brackeys", ytlink: "https://www.youtube.com/channel/UCYbK_tjZ2OrIZFBvU6CCMiA", tick:"tick fas fa-check-circle"},
  {name: "Dani", ytlink: "https://www.youtube.com/channel/UCIabPXjvT5BVTxRDPCBBOOQ", tick:""},
  {name: "Blackthornprod", ytlink: "https://www.youtube.com/channel/UC9Z1XWw1kmnvOOFsj6Bzy2g", tick:""},
  {name: "Sam Hogan", ytlink: "https://www.youtube.com/channel/UCORkUj9eaM2aDJM1VYyDDTA", tick:""},
  {name: "Dev Duck", ytlink: "https://www.youtube.com/channel/UCKCTmact-90hXpV2ns8GSsA", tick:""},
  {name: "Awesome Tuts", ytlink: "https://www.youtube.com/channel/UC5c-DuzPdH9iaWYdI0v0uzw", tick:""},
  {name: "Thomas Brush", ytlink: "https://www.youtube.com/channel/UCuHVjteDW9tCb8QqMrtGvwQ", tick:""},
  {name: "Sykoo", ytlink: "https://www.youtube.com/channel/UCNJvwJ6daLmw4_gUKTw4cSg", tick:""},
  {name: "RealTutsGML", ytlink: "https://www.youtube.com/channel/UCOs7Q7IeuzgRyARaEqif75A", tick:""},
  {name: "Pixel Pete", ytlink: "https://www.youtube.com/channel/UC7OO80qJzGTLOj_6-0dmOiA", tick:""},
  {name: "BenBonk", ytlink: "https://www.youtube.com/channel/UCLO_c9nyLCwohHqovjlmpDw", tick:""},
  {name: "ThinMatrix", ytlink: "https://www.youtube.com/channel/UCUkRj4qoT1bsWpE_C8lZYoQ", tick:""},
  {name: "GucioDevs", ytlink: "https://www.youtube.com/channel/UC4MDTn6WkqvBfBW_4cFZp2g", tick:""},
  {name: "GameGrind", ytlink: "https://www.youtube.com/channel/UCTY3kks3U4RDvpMX87fvo1A", tick:""},
  {name: "Ask Gamedev", ytlink: "https://www.youtube.com/channel/UCd_lJ4zSp9wZDNyeKCWUstg", tick:""},
  {name: "Jonas Tyroller", ytlink: "https://www.youtube.com/channel/UC_p_9arduPuxM8DHTGIuSOg", tick:""},
  {name: "Randall", ytlink: "https://www.youtube.com/channel/UCUmLRMERmJrmUtgnbFfknAg", tick:""},
  {name: "HeartBeast", ytlink: "https://www.youtube.com/channel/UCrHQNOyU1q6BFEfkNq2CYMA", tick:""},
  {name: "KidsCanCode", ytlink: "https://www.youtube.com/c/KidscancodeOrg/videos", tick:""},
  {name: "GDQuest", ytlink: "https://www.youtube.com/channel/UCxboW7x0jZqFdvMdCFKTMsQ", tick:""},
  {name: "Mister Taft Creates", ytlink: "https://www.youtube.com/c/MisterTaftCreates", tick:""},
  {name: "Game Endeavor", ytlink: "https://www.youtube.com/c/GameEndeavor/about", tick:""},
  {name: "Pigdev", ytlink: "https://www.youtube.com/channel/UCFK9ZoVDqDgY6KGMcHEloFw", tick:""},
  // {name: "name", ytlink: "link", tick:""},

]

let uideveloper = [
  {name: "DesignCourse", ytlink: "https://www.youtube.com/user/DesignCourse", tick:"tick2 fas fa-check-circle"},
  {name: "Caler Edwards", ytlink: "https://www.youtube.com/channel/UCfzOLBT7jyHFcaTgwmnttog", tick:""},
  {name: "DesignCode", ytlink: "https://www.youtube.com/channel/UCTIhfOopxukTIRkbXJ3kN-g", tick:""},
  {name: "The Futur", ytlink: "https://www.youtube.com/channel/UC-b3c7kxa5vU-bnmaROgvog", tick:""},
  {name: "Flux", ytlink: "https://www.youtube.com/channel/UCN7dywl5wDxTu1RM3eJ_h9Q", tick:""},
  {name: "CharliMarieTV", ytlink: "https://www.youtube.com/user/charlimarieTV", tick:""},
  {name: "Maex", ytlink: "https://www.youtube.com/channel/UCSdp5logiFTM3SyLJrHabOQ", tick:""},
  {name: "Laith Wallace", ytlink: "https://www.youtube.com/channel/UCnpdR3kXJgs2y8o_PNddZxQ", tick:""},
  {name: "Dansky ", ytlink: "https://www.youtube.com/user/ForeverDansky", tick:""},
  {name: "searching..", ytlink: "#", tick:""},
  // {name: "name", ytlink: "link", tick:""},

]

  // Change Browser Title.
  useEffect(() =>{
    document.title="Developers - spatepate"
}, [])

    return (
        <div>
      {/* ============================================================= */}
      {/* PAGE HEADER, WITH TITLE AND CAPTION start */}
        <header className="jumbotron jumbotron-fluid bg-dark">
          <div className="container-fluid text-center">
            <h1 className="display-3">Developers <i className="fad fa-terminal"></i>  </h1>
            <p className="lead pb-4">
            Go subscribe to these <span className="badge badge-danger" style={{fontSize:"15px"}}>developers</span>, they provide great tutorials and content!
            </p>
            {/* <p>
             <a href="#lang" className="btn btn-danger btn-lg mybtn3" role="button">
             Scroll
            </a>
            </p> */}
          </div>
        </header>
        {/* PAGE HEADER, WITH TITLE AND CAPTION end */}
        
        
        {/* ======================================================================== */}
      {/* new developer feature */}
      <section id="developers" className="bg-dark">
        <br/>
        <div className="container">
          <h2 className="text-center text-white">Developers</h2>
          <center>
          <span className="badge subText">Subscribe</span>
          </center>
          <div className="row col-md-12 justify-content-center developer">
            {developers.map(function(dev, index){
              return <div className="card rounded-pill" style={{width:"250px"}} key={index}>
              <a href={dev.ytlink} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"black"}}>
              <div className="card-body text-center">
              {dev.name} <i className={dev.tick}></i>
              </div>
              </a>
            </div>
            })}
  

          </div>
        </div>
      </section>

      {/* game dev */}
      <section id="gameDevelopers" className="bg-dark">
        <div className="container">
          <h2 className="text-center text-light ">Game Developers</h2>
          <center>
          <span className="badge subText">Subscribe</span>
          </center>
          <div className="row col-md-12 justify-content-center gamedev">
            {gamedevelopers.map(function(gamedev, index){
              return <div className="card rounded-pill" style={{width:"250px"}} key={index}>
              <a href={gamedev.ytlink} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"black"}}>
              <div className="card-body text-center">
              {gamedev.name} <i className={gamedev.tick}></i>
              </div>
              </a>
            </div>
            })}
  

          </div>
        </div>
      </section>

      {/* ui/ux developer */}

      <section id="designers" className="bg-dark">
        <div className="container">
          <h2 className="text-center text-white">UI/UX Designers</h2>
          <center>
          <span className="badge subText">Subscribe</span>
          </center>
          <div className="row col-md-12 justify-content-center designers">
            {uideveloper.map(function(uidev, index){
              return <div className="card rounded-pill" style={{width:"250px"}} key={index}>
              <a href={uidev.ytlink} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"black"}}>
              <div className="card-body text-center">
              {uidev.name} <i className={uidev.tick}></i>
              </div>
              </a>
            </div>
            })}
  

          </div>
        </div>
      </section>
        {/* ======================================================================== */}





      </div>
    )
}

export default Developers
