import React from 'react';
import { Link } from 'react-router'

import Logo from './Logo.jsx';

class Leftmenu extends React.Component{
  render() {
  		return (
  			<div className="leftmenu">
  				<Link to="/"><Logo /></Link>
  				<span className="leftmenu__heading">Channels</span>
  				<ul className="leftmenu__listholder">
  					<li>activism</li>
  					<li><Link to="/list">academics</Link></li>
  					<li>digital</li>
  					<li>entrepeneurial</li>
  					<li>journalism</li>
  					<li>politics</li>
  					<li>random</li>
  				</ul>
  				<span className="leftmenu__box">suggest a channel</span>
  				<span className="leftmenu__heading leftmenu__padding"><Link to="/about">About ullie</Link></span>
  				<span className="leftmenu__heading leftmenu__padding">Contact</span>

  			</div>
  		)
		}
}
export default Leftmenu;