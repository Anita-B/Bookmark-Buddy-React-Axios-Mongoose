import React from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Home from "./Home";


class Main extends React.Component {
  constructor(props) {
  
      super(props);

        this.state = {
      loggedin: null
    }

      //console.log(props.location.hash);
  }

  componentDidMount() {
    if (document.cookie) {
      this.setState({loggedin: "loggedin"})
    }
    
  }

  render() {
//console.log("HERE ", this.props.children);
    //console.log(document.cookie)
    // if (this.props.location.hash === "#/signup") {
    //     var style = {  background: "#333"};
    // }

    return (
      <div>
        <Navbar loggedin={this.state.loggedin} />
          <Home />
        <Footer />
      </div>
    );
  }
}

export default Main;
