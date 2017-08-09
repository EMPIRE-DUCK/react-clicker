import React from 'react';
import logo from '../img/logo.svg';
class ClickerMain extends React.Component{
	render(){
		return(
      <div className="main-clicker-container">
        <h4>Helloo I am the clicker</h4>
        <img className="main-clicker-image" src={logo}/>
      </div>
		)
	}
}


export default ClickerMain;