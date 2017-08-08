import React from 'react';
import logo from '../img/logo.svg';
var ReactRouter = require('react-router-dom');
var NavLink = ReactRouter.NavLink;

class Nav extends React.Component{
	render(){
		return(
      <nav className="ui top menu inverted">
        <div className="item">
          <img className="ui navbar-logo" src={logo}/>
        </div>
        <NavLink className="item" exact to="/">{this.props.name}</NavLink>
{/*        <NavLink className="item" to="/options">Options</NavLink>
*/}        <NavLink className="item" to="/about">About</NavLink>
      </nav>
		)
	}
}


export default Nav;