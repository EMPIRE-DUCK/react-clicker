import React from 'react';

class SetName extends React.Component{
	render(){
		return(
          <div className="ui container">
            <form onSubmit={this.handleSubmit}>
              <label>
                Your name:
                <input type="text"/>
              </label>
              <input type="submit"/>
            </form>
          </div>   
		)
	}
}
export default SetName;