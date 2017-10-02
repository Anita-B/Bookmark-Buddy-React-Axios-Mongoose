import React, { Component } from "react";
import API from "../../utils/API";

class Search extends Component {
	
	constructor() {
    	super();
    	this.state = {
      		search: ""
    	};
    	// Binding handleSearchChange since we'll be passing them as
    	// callbacks and 'this' will change otherwise
    	this.handleSearchChange = this.handleSearchChange.bind(this);
    	this.onSearchSubmit = this.onSearchSubmit.bind(this)
  	}

  	handleSearchChange(event) {
    	this.setState({ search: event.target.value });
    	console.log("in search - handleSearchChange ", event.target.value );
  	}

  	onSearchSubmit(event) {
  		event.preventDefault();
  		console.log("in search - onSearchSubmit ", this.state.search );
        API.searchUrls(this.state.search);
    	//this.setState({ search: event.target.value });
    	
  	}

	render() {

	    return (

	    	<div className="row">
	    		{/* Search Bar */}
				<section id="searchBarContainer" className="text-white py-4">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<form onSubmit={this.onSearchSubmit} className="input-group">
									<span className="input-group-btn">
										<button onSubmit={this.onSearchSubmit} className="btn searchButton" type="submit"><i className="fa fa-search fa-lg" aria-hidden="true"></i></button>
									</span>


									<input 
										id="searchBar" 
										type="text" 
										value={this.state.search}
										onChange={this.handleSearchChange}
										required
										className="form-control" 
										placeholder="Search for..." 
										autoComplete="on" 
									/>
					            </form>
				          	</div>
				      	</div>

				    </div>
			  </section>
	    </div>
	    );

	}
}

export default Search;
