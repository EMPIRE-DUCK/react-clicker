import React from 'react';
import logo from '../img/logo.svg';
class ClickerMain extends React.Component{
  constructor(props){
    super();
  this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(){
    this.props.passScoreChange(1);
  }

	render(){
		return(
      <div className="main-clicker-container">
        <div>
        <img className="main-clicker-image" src={logo} onClick={this.clickHandler}/>
        </div>
      </div>
		)
	}
}


export default ClickerMain;