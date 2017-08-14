import React from 'react';
class UpgradeLab extends React.Component{

	render(){
		return(
      <div className="ui raised very padded text container segment">
        <h2 className="ui header">Options</h2>
        <SetName onUsernameInput={this.props.onUsernameInput} username={this.props.username}/>
      </div>
		)
	}
}
export default UpgradeLab;