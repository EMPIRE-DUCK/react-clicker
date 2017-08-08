import React from 'react';
import logo from '../img/logo.svg';

class Nav extends React.Component{
	render(){
		return(
      <nav className="ui top menu inverted">
        <div className="item">
          <img className="ui navbar-logo" src={logo}/>
        </div>
        <a className="item">{this.props.name}</a>
        <a className="item">Options</a>
        <a className="item">About</a>
      </nav>
		)
	}
}


export default Nav;