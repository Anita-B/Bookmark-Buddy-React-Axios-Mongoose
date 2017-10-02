import React, { Component } from "react";
import { Link } from "react-router";

{/*const Footer = () => (*/}
class Footer extends Component {

	render(){

		return (
			<footer id="main-footer" className="py-3 bg-primary text-white fixed-bottom">
		    	<div className="container">
		      		<div className="row text-center">
		        		<div className="col-md-6 ml-auto">
		          			<p className="lead"></p>
		        		</div>
					</div>
				</div>
			</footer>
		);

	}


}

export default Footer;
