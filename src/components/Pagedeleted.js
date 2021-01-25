import React from 'react'
import { useHistory } from 'react-router-dom'
// Page deleted stylings import
import TypeIt from "typeit-react";
import "./styles/Pagedeleted.css"



// 404 PAGE function START
function Pagedeleted() {
	// Allows the user to return back to the previous page.
	let history = useHistory();
    return (
	<section className="page404">
	<TypeIt
	className="pagenotfound"
	element={"h3"}
 	 getBeforeInit={instance => {
    instance
      .type("404, page not found. ")
      .pause(750)
      .delete()
      .pause(500)
	  .type("Page does not exist. ");
    // Remember to return it!
    return instance;
  }}
/>
	</section>

// 404 PAGE function END
    )
}

export default Pagedeleted
