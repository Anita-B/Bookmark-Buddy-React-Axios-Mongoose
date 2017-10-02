import React, { Component } from "react";
import Search from "./common/Search";
import Add from "./common/Add";
import Saved from "./common/Saved"; 
import API from "../utils/API";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      urls: [],
      sites: [],
      cookies: ""
    };
    // Binding getUrls to our component since we'll be passing this
    // method to child components
    this.getUrls = this.getUrls.bind(this);
  }
  // Getting all Urls when the component mounts
  componentDidMount() {

    API.getUrls().then((res) => {
      this.setState({ urls: res.data });
      console.log(res.data);
    });
    // this.setState({cookies: document.cookie.slice(9)})

    // API.loadPage(this.state.cookies).then((user) => {
    //   console.log(user);
    //   this.setState({urls: user.urls})
    // });
    //this.setState({cookies: })
    //this.getUrls();
  }
  getUrls() {
    // API.getUrls().then((res) => {
    //   this.setState({ sites: res.data });
    //   console.log(res.data);
    // });
  }
  // A helper method for rendering one panel for each url
  renderUrls() {
    return this.state.urls.map(url => (
      <Saved
        url={url}
        key={url._id}
        getUrls={this.getUrls}
      />
    ));
  }
  render() {


    var thStyle = { verticalAlign: "middle" };

    return (

      <div>
      
        <div className="row rowSearch">
          <Search urls={this.urls}/>
        </div>

        <div className="container">

          <div className="row rowSaved">
            {/*<Saved/>*/}

            {/*<!-- saved results -->*/}
            <section className="py-5">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="card">

                          <table className="table">
                              <thead className="thead text-white">
                                  <tr className="tableHead">
                                      <th style={thStyle}>Title</th>
                                            <th style={thStyle}>Category</th>
                                            <th style={thStyle}>URL</th>
                                            <th style={thStyle}>Screenshot</th>
                                            <th style={thStyle}>Note</th>
                                            <th style={thStyle}></th>
                                    </tr>
                                </thead>
                                <tbody>

                                {this.renderUrls()}

                                </tbody>
                          </table>

                      </div>
                    </div>
                  </div>
                </div>
            </section>

          </div>

        </div>

      </div>  
    );
  }
}

export default Home;