import React from 'react';

class Clicker extends React.Component{
	render(){
		return(
      <div className="ui container">
        <h1>Clicker</h1>
        <p>Welcome {this.props.user}!</p>
      </div>
		)
	}
}


export default Clicker;