import React from 'react';

import Logo from './Logo.jsx';

class Leftmenu extends React.Component{
  render() {
  		return (
  			<div className="leftmenu">
  				<Logo />
  				<span className="leftmenu__heading">Channels</span>
  				<ul className="leftmenu__listholder">
  					<li>activism</li>
  					<li>academics</li>
  					<li>digital</li>
  					<li>entrepeneurial</li>
  					<li>journalism</li>
  					<li>politics</li>
  					<li>random</li>
  				</ul>
  				<span className="leftmenu__box">suggest a channel</span>
  				<span className="leftmenu__heading leftmenu__padding">About ullie</span>
  				<span className="leftmenu__heading leftmenu__padding">Contact</span>

  			</div>
  		)
		}
}
export default Leftmenu;