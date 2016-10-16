import React from 'react';
import Rebase from 're-base';

import { Link } from 'react-router';

var base = Rebase.createClass({
  apiKey: "AIzaSyAb36H06ygKvID9YRsA7AGqSCHKWqLBxRs",
  authDomain: "ullie-ddbae.firebaseapp.com",
  databaseURL: "https://ullie-ddbae.firebaseio.com",
  storageBucket: "ullie-ddbae.appspot.com"
});

class Login extends React.Component{
	constructor(props) {
    super(props);    
    this.state = {
    	usernameValue: 'erikvanzummeren@gmail.com',
    	passwordValue: 'correcthorsebatterystaple',
    	loggedIn: false,
    	error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
  }

  componentDidMount(){
  	console.log(this.props);
  }

  loggedIn (user) {
	  if (user) {
  		console.log("User " + user.uid + " is logged in with " + user.providerId);
  		console.log(this.props.getLoggedIn);
  		this.props.getLoggedIn(user.uid);
      this.setState( function(state){
	      state.loggedIn = true;
	      state.error = false;
      })

	  } else {
	    console.log("User is logged out");

	  }
	}

	authHandler (error, user) {
  	if(error) this.setState( function(state){state.error = true; })
  	this.loggedIn(user);
	}

  handleChange(event) {
    this.setState({usernameValue: event.target.value});
  }

  handlePassChange(event) {
    this.setState({passwordValue: event.target.value});
  }  

  handleSubmit(event) {
    event.preventDefault();
    var user = this.state.usernameValue.trim();
    var pass = this.state.passwordValue.trim();
    console.log(user);
    if (!pass || !user) {
      return;
    } else {
			base.authWithPassword({
  			email    : user,
  			password : pass
			}, this.authHandler.bind(this));
    }
  }

  render() {
  	var loginButton;
		if (this.state.loggedIn) {
		  loginButton = <div>Logged in. <Link to="/">Go to homepage</Link></div>;
		} else {
		  loginButton = <div>Forgot your password?</div>;
		}
  		return (
				<div className="">
					<h1>Login</h1>
					{ this.state.error ? <div>Error. Wrong username or password.</div> : null }
					{ this.state.loggedIn ? null : 
						<form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
				      <input
				        type="text"
				        value={this.state.usernameValue}
				        onChange={this.handleChange}
				      />
				      <input
				        type="password"
				        value={this.state.passwordValue}
				        onChange={this.handlePassChange}
				      />			
				      <input type="submit" value="Post" />
            </form>
          }
            {loginButton}
				</div>
  		)
		}
}
export default Login;