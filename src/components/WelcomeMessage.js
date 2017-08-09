import React from 'react';

class WelcomeMessage extends React.Component{
	render(){
		return(
        <p>Welcome {this.props.name}! Time to start clicking!</p>
		)
	}
}


export default WelcomeMessage;