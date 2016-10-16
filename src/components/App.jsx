import React from 'react';
import Rebase from 're-base';

import List from "./List.jsx";
import Leftmenu from "./menu/Left-menu.jsx";
import Topbar from "./menu/Topbar.jsx";

var base = Rebase.createClass({
  apiKey: "AIzaSyAb36H06ygKvID9YRsA7AGqSCHKWqLBxRs",
  authDomain: "ullie-ddbae.firebaseapp.com",
  databaseURL: "https://ullie-ddbae.firebaseio.com",
  storageBucket: "ullie-ddbae.appspot.com"
});

// var loggedIn = function (user) {
//   console.log('woooooohooooo')
//   console.log(user);
// }

// var authHandler = function(error, user) {
//   if(error) console.log(error);
//   loggedIn(user);
// }

// Simple email/password authentication
// base.authWithPassword({
//   email    : 'erikvanzummeren@gmail.com',
//   password : 'correcthorsebatterystaple'
// }, authHandler);


// var userHandler = function (bla) {
//   console.log(user);
//   var user = base.auth().currentUser;

//   user.sendEmailVerification().then(function() {
//     // Email sent.
//     console.log('email verzonden');
//   }, function(error) {
//     console.log('nothing');
//   });
// }
//basic
// base.createUser({
//   email: 'erikvanzummeren@gmail.com',
//   password: 'correcthorsebatterystaple'
// }, userHandler);


class App extends React.Component{
  constructor(props) {
    super(props);    
    this.state = {
      userId: '',
      userLoggedIn: false
    };
  }

  logIn(uid) {
      console.log('waarom laat jij niets zien?');
      this.setState( function(state){
        state.userId = uid;
        state.userLoggedIn = true;
      })
      console.log(this.state);
    }

  shit(){
    console.log('doe iets man');
  }

  render() {
  		return (
  			<div className="pagecontainer">
  				<Leftmenu />
          <Topbar loggedIn={this.state.userLoggedIn}/>
  				{this.props.children && React.cloneElement(this.props.children, {
              getLoggedIn: this.logIn.bind(this),
              shit: this.shit
            })}
  			</div>
  		)
		}
}
export default App;