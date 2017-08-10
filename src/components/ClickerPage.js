import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ClickerMain from './ClickerMain';
import ClickerScoreDisplay from './ClickerScoreDisplay';
import ClickerUpgrades from './ClickerUpgrades';
import ClickerBuildings from './ClickerBuildings';
class ClickerPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      score: 0
    }
    this.handleScoreChange = this.handleScoreChange.bind(this);    
  }
  handleScoreChange(num){
    const updatedScore = this.state.score + num;
    this.setState({
      score: updatedScore
    })
  }
	render(){
		return(
      <div className="ui stackable grid">
        <ClickerUpgrades/>
        <div className="eight wide stretched column">
          <div className="ui raised segment">
            <WelcomeMessage name={this.props.username}/>
            <ClickerMain passScoreChange={this.handleScoreChange}/>
            <ClickerScoreDisplay score={this.state.score}/>
          </div>
        </div>
        <ClickerBuildings/>        
      </div>
		)
	}
}


export default ClickerPage;