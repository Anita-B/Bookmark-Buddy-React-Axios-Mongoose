import React, { Component } from "react";
import API from "../../utils/API";

class Saved extends Component {
	
	editUrl(id){
		//API.editUrl(id).then(this.props.getUrls);
	}

	shareUrl(id){
		//API.shareUrl(id).then(this.props.getUrls);
	}

	// deleteUrl deletes a url in the db and then
	// reloads all urls in our app
	deleteUrl(id) {
		//API.deleteUrl(id).then(this.props.getUrls);
	}

	render() {

		//var thStyle = { verticalAlign: "middle" };

	    return (

  			<tr>
    			<td>{this.props.url.title}</td>
    			<td>{this.props.url.category}</td>
    			<td><a href="#" className="aTable">{this.props.url.url}</a></td>
    			<td>{this.props.url.screenshot}</td>
    			<td>{this.props.url.note}</td>
    			<td>
      				<a href="#"><i 
      					className="fa fa-pencil-square-o fa-lg" 
      					onClick={() => this.editUrl(this.props.url._id)}
      					aria-hidden="true">
      					</i></a>
      				<a href="#"><i 
      					className="fa fa-share-square-o fa-lg" 
      					onClick={() => this.shareUrl(this.props.url._id)}
      					aria-hidden="true">
      					</i></a>
      				<a href="#"><i 
      					className="fa fa-trash-o fa-lg" 
      					onClick={() => this.deleteUrl(this.props.url._id)}
      					aria-hidden="true">
      					</i></a>
    			</td>
  			</tr>
				                

	        

	    );

	}
}

export default Saved;
