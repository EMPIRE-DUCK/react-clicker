import React from 'react';

class Clicker extends React.Component{
	render(){
		return(
      <div className="ui raised very padded text container segment">
        <h2 className="ui header">Clicker</h2>
        <p>Welcome {this.props.user}!</p>
      </div>
		)
	}
}


export default Clicker;