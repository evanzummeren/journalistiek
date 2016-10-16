import React from 'react';
import { Link } from 'react-router';

class Topbar extends React.Component{
  render() {
  	var loginButton;

		if (this.props.loggedIn) {
		  loginButton = <ul className="topbar"><li>My Profile</li></ul>
		} else {
		  loginButton = <ul className="topbar"><li><Link to="/login">Login</Link></li><li>|</li><li><Link to="/register">Register</Link></li></ul> 
		}
  		return (
  			<div>
  				{loginButton}
  			</div>
  		)
		}
}
export default Topbar;