import React from 'react';

class SetName extends React.Component{
	render(){
		return(
          <div className="ui container">
          <form>
          	<label>
          	Your name: 
            <input type="text" onChange={this.props.onUsernameInput} defaultValue={this.props.username}/>
            </label>
          </form>              
          </div>   
		)
	}
}
export default SetName;