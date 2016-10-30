import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import App from "./App.jsx";

class AppRouter extends React.Component{
  render() {
  		return (
		  <Router history={browserHistory}>
		    <Route path="/" component={App}>
{	/* 	      <Route path="login" component={Login} />
		      <Route path="register" component={Register} /> */ }
		    </Route>
		  </Router>
  		)
		}
}
export default AppRouter;