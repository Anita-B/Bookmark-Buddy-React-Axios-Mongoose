import React, { Component } from "react";
import { Link } from "react-router";
import API from "../utils/API";

class Login extends Component {

	constructor() {
	    super();
	    this.state = {
	      something: []
	    };
	}

	render() {

		var display = { display: "none" };
    	return (
    		<div>

    			{/*<!-- Grey section -->*/}
				<section className="py-4 mb-4 greySection">
				<div className="container">
				  <div className="row"></div>
				</div>
				</section>

				{/*<!-- Log in -->*/}
				<section id="login">
				<div className="container">
				  <div className="row">
				    <div className="col-md-5 mx-auto">
				      <div className="card">
				        <div className="card-header">
				          <h4>Login</h4>
				        </div>
				        <div className="card-body">
				          <form className="login" action="/api/login" method="post">
				            <div className="form-group">
				              <label for="email">Email</label>
				              <input id="email-input" type="email" className="form-control x" required />
				            </div>
				            <div className="form-group">
				              <label for="password">Password</label>

				              <input type="password" className="form-control" id="password-input" required />


				            </div>
				            <div style={display} id="alert" className="alert alert-danger" role="alert">
				              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
				              <span className="sr-only">Error:</span> <span className="msg"></span>
				            </div>
				            <input type="submit" className="btn btn-primary btn-block" value="Login" />
				          </form>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>
				</section>
				<hr/>
				<ul className ="account">
				 <li id="user"> Don't have an account?</li>

				 <a href="#" id="creatAcc"><li>Create account</li></a>
				 <li id="copyRight">Copyright 2017 Bookmark Buddy. All rights reserved.</li>
				</ul>

    		</div>
    	);

    }






}

export default Login;
