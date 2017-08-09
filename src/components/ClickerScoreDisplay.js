import React from 'react';
class ClickerScoreDisplay extends React.Component{
	render(){
		return(
      <div className="main-clicker-container">
        <h4>Score:</h4>
        <p>{this.props.score}</p>
      </div>
		)
	}
}


export default ClickerScoreDisplay;