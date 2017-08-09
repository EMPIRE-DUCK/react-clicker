import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ClickerMain from './ClickerMain';
import ClickerScoreDisplay from './ClickerScoreDisplay';

class ClickerPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      score: 0
    }
    this.handleScoreChange = this.handleScoreChange.bind(this);    
  }
  handleScoreChange(num){
    const updatedScore = this.score + num
    this.setState({
      score: updatedScore
    })
  }
	render(){
		return(
      <div className="ui raised very padded text container segment">
        <h2 className="ui header">Clicker</h2>
        <WelcomeMessage name={this.props.username}/>
          <ClickerMain/>
          <ClickerScoreDisplay score={this.state.score}/>
        </div>
		)
	}
}


export default ClickerPage;