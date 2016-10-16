import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import App from "./App.jsx";
import About from "./About.jsx";
import List from "./List.jsx";

import Login from "./user/Login-modal.jsx";
import Register from "./user/Register.jsx";

class AppRouter extends React.Component{
  render() {
  		return (
		  <Router history={browserHistory}>
		    <Route path="/" component={App}>
		      <Route path="list" component={List} />
		      <Route path="about" component={About} />
		      <Route path="login" component={Login} />
		      <Route path="register" component={Register} />
		    </Route>
		  </Router>
  		)
		}
}
export default AppRouter;