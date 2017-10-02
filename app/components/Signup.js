import React, { Component } from "react";
import { Link } from "react-router";
import API from "../utils/API";

class Signup extends Component {

	constructor() {
	    super();
	    this.state = {
	      something: []
	    };
	}
componentDidMount(){
console.log(this.state)
	var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

}

    render() {

    	return (
    		<div>

    			{/*<!-- Grey section -->*/}
				  {/* <section className="py-3 mb-4 bg-light">
				    <div className="container">
				      <div className="row"></div>
				    </div>
				  </section> */}


				{/*<!-- Main Section -->*/}
				  <div className="container py-5 bodyLandingPage">
				    <div className="row">

				      {/*<!-- 1 of 2-introduction  -->*/}
				      <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 introSection">
								<header id="home-section">
								<div className="dark-overlay">
									<div className="home-inner">
										<div className="container">
											<div className="row">
												<div className="col-lg-8 d-lg-block">
													<h1 className="display-4">
														Bookmark
															<br/>
															Buddy

												</h1>
												<div className="d-flex flex-row">
														<div className="content">
																<div className="content__container">
																	<p className="content__container__text">
																		www.
																	</p>

																	<ul className="content__container__list">
																		<li className="content__container__list__item">google.com</li>
																		<li className="content__container__list__item">amazon.com</li>
																		<li className="content__container__list__item">twitter.org</li>
																		<li className="content__container__list__item">github.com</li>
																	</ul>
																</div>
															</div>


															<div>
															<link href="https://fonts.googleapis.com/css?family=Raleway:200,100,400" rel="stylesheet" type="text/css" />
															<h1 id="lastSite">The Last Site<br/>
																<span
																	 className="txt-rotate"
																	 data-period="2000"
																	 data-rotate='[ "you.", "need.", "to.", "remember"]'></span>
															</h1>
														</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							</header>

				      </div>
				      {/*<!-- 2 of 3 divider -->*/}
				      {/* <div className="col-1 divider-wrapper">

				              <div className="divider"></div>

				      </div> */}
				       {/* <!-- 2 of 2 sign up-->*/}
				      <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 signUpSection">
				          <section id="signUp">
				            <div className="container">
				              <div className="row">
				                <div className="col-md-11 mx-auto">
				                  <div className="card">
				                    <div className="card-header">
				                      <h4>Sign Up</h4>
				                    </div>
				                    <div className="card-body">

				

				                      <form class="signup" action="/signup" method="post">
				                        <div className="form-group">
				                          <label for="fullname">Full Name</label>
				                          <input type="text" id="fullname" className="form-control x" required />
				                        </div>
				                        <div className="form-group">
				                          <label for="email">Email</label>
				                          <input type="email" id="email" className="form-control x" required />
				                        </div>
				                        <div className="form-group">
				                          <label for="password">Password</label>
				                          <input type="password" id="password" className="form-control x" required />
				                        </div>
				                        <input type="submit" className="btn btn-primary btn-block" value="Sign up" />
				                      </form>




				                    </div>
				                  </div>
				                </div>
				              </div>
				            </div>
				        </section>
				      </div>
				      </div>
				    </div>

							{/* second row */}

							<section id="explore-head-section">
						    <div className="container">
						      <div className="row">
						        <div className="col text-center">
						          <div>
						            <h1 className="whatNew">How <br/>It <br/>Works</h1>
						            <div>
						                 <p >Bookmark Buddy is a lightweight URL organizer, use it to save websites, and keep all your bookmarks organized with built-in search, organized by category, and even leave your self-notes. Bookmark Buddy is the last thing you will have to remember.</p>
						            </div>
						          </div>
						        </div>
						      </div>
						    </div>
						  </section>

							{/* <!--EXPLORE SECTION  --> */}
						  <section id="explore-section" className="bg-light text-muted py-5">
						    <div className="container">
						      <div className="row">
						        <div className="col-md-8">
						          <h3>Bookmark Buddy in use</h3>
						             <div className="d-flex flex-row">
						            <div className="p-4 align-self-start">
						              <i className="fa fa-check fa-lg"></i>
						            </div>
						            <div className="p-4 align-self-end">
						              Bookmark Buddy is cross platform.
						            </div>
						           </div>
						          <div className="d-flex flex-row">
						            <div className="p-4 align-self-start">
						              <i className="fa fa-check fa-lg"></i>
						            </div>
						            <div className="p-4 align-self-end">
						            Finally a way to organize your sites.
						            </div>
						          </div>
						        </div>
						      </div>



									<div className="text-right groupImg">
										<p>Developers:&nbsp;&nbsp;&nbsp;
										 <a href="https://www.linkedin.com/in/mahshid-m-010680139/"><img  src="https://avatars2.githubusercontent.com/u/29652821?v=4&s=460" className="rounded-circle" alt="Mahshid"/></a>
										 <a href="https://www.linkedin.com/in/anita-brument-84a8388/">
										  <img  src="https://avatars3.githubusercontent.com/u/11968956?v=4&s=460" className="rounded-circle" alt="Anita"/></a>
											<a href="https://www.linkedin.com/in/davidlaidlaw/">
											 <img  src="https://avatars3.githubusercontent.com/u/29416480?v=4&s=460" className="rounded-circle" alt="David"/></a></p>

									</div>


						    </div>
						  </section>

    		</div>
    	);
  	}
}

export default Signup;
