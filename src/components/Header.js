import React from 'react';

class Nav extends React.Component{
	render(){
		return(
      <nav className="navbar">
        <h2>{this.props.name}</h2>
      </nav>
		)
	}
}


export default Nav;