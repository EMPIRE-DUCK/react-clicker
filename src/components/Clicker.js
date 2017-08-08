import React from 'react';

class Clicker extends React.Component{
  constructor() {
    super();
    this.state = {test: "I am testing"}
  }

	render(){
    setTimeout(() => {
      this.setState({test: "lmao"});
    }, 2000);  
		return(
      <div className="ui container">
        <h1>Clicker</h1>
        <p>{this.state.test}</p>
      </div>
		)
	}
}


export default Clicker;