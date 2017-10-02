import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../components/Main";
import Home from "../components/Home";
import Signup from "../components/Signup";
import Login from "../components/Login";



// const routes = (
//   <Router history={browserHistory}>
//     <Route path="/" component={Main}>
//     	<IndexRoute component={Home} />
//     </Route>
//   </Router>
// );


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
    	<Route path="home" component={Home} />

    	<IndexRoute component={Home}/>
    </Route>
  </Router>
);

export default routes;
