import React from 'react'
import { useHistory } from 'react-router-dom'
// Page deleted stylings import
import "./styles/Pagedeleted.css"

// 404 PAGE function START
function Pagedeleted() {
	// Allows the user to return back to the previous page.
	let history = useHistory();
    return (
		// CENTERED 
        <center>
	<section className="page_404">
		<div id="notfound">
			<div className="notfound">
				<div className="notfound-bg">
					<div></div>
					<div></div>
					<div></div>
				</div>
				<h1>oops!</h1>
				<h2>Error 404 : Page Not Found</h2>
				<button className="btn btn-secondary" onClick={() => history.goBack()} >go back</button>
				<div className="notfound-social">
					<a href="#"><i className="fab fa-instagram"></i></a>
					<a href="#"><i className="fab fa-twitter"></i></a>
					<a href="#"><i className="fab fa-linkedin"></i></a>
					<a href="#"><i className="fab fa-youtube"></i></a>
				</div>
			</div>
		</div>
	</section>
</center>
// 404 PAGE function END

    )
}

export default Pagedeleted
