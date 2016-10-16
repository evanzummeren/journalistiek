import React from 'react';
import Rebase from 're-base';

import { Link } from 'react-router';

var base = Rebase.createClass({
  apiKey: "AIzaSyAb36H06ygKvID9YRsA7AGqSCHKWqLBxRs",
  authDomain: "ullie-ddbae.firebaseapp.com",
  databaseURL: "https://ullie-ddbae.firebaseio.com",
  storageBucket: "ullie-ddbae.appspot.com"
});

class Register extends React.Component{
	constructor(props) {
    super(props);    
    this.state = {
      usernameValue: '',
      passwordValue: '',  
      firstnameValue: '',    
    	loggedIn: false,
    	error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
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

	userHandler (error, user) {
    console.log(error);
    console.log(user);
  	if(error) this.setState( function(state){state.error = true; })
  	// this.loggedIn(user);
	}

  handleChange(event) {
    this.setState({usernameValue: event.target.value});
  }

  handleFirstnameChange(event) {
    this.setState({firstnameValue: event.target.value});
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
    base.createUser({
      email: user,
      password: pass
    }, this.userHandler.bind(this));


			// base.authWithPassword({
  	// 		email    : user,
  	// 		password : pass
			// }, this.authHandler.bind(this));
    }
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  }

  render() {
  		return (
				<div className="">
					<h1>Register</h1>
						<form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
				      <input
				        type="text"
                placeholder="email"
				        value={this.state.usernameValue}
				        onChange={this.handleChange}
				      />
              <input
                type="text"
                placeholder="first name"
                value={this.state.firstnameValue}
                onChange={this.handleFirstnameChange}
              />
				      <input
				        type="password"
                placeholder="password"
				        value={this.state.passwordValue}
				        onChange={this.handlePassChange}
				      />			
				      <input type="submit" onKeyPress={this.handleKeyPress} value="Register" />
            </form>
				</div>
  		)
		}
}
export default Register;