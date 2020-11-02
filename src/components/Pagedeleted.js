import React from 'react'
// Page deleted stylings import
import "./styles/Pagedeleted.css"

// 404 PAGE function START
function Pagedeleted() {
    return (
		// CENTERED 
        <center>
	<section className="page_404">
		<div className="container">
			<div className="row">	
				<div className="col-sm-12 ">
					<div className="col-sm-10 col-sm-offset-1  text-center">
						<div className="four_zero_four_bg">
							{/* PAGE TTILE */}
							<h1 className="text-four">404</h1>
						</div>
				
						{/* PAGE DESCRIPTION */}
						<div className="contant_box_404">
							<h3 className="h2">
							Looks like you're lost
							</h3>
							<p>the page you are looking for is not available!</p>
							
							{/* LINK BACK TO THE LANDING PAGE /home */}
							<a href="/" type="button" className="btn btn-success p-3">Go to Home</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</center>
// 404 PAGE function END

    )
}

export default Pagedeleted
