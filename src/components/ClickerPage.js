import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ClickerMain from './ClickerMain';
import ClickerScoreDisplay from './ClickerScoreDisplay';
import ClickerUpgrades from './ClickerUpgrades';
import ClickerBuildings from './ClickerBuildings';
class ClickerPage extends React.Component{

	render(){
		return(
      <div className="ui stackable grid">
        <ClickerUpgrades  upgrades={this.props.upgrades} handleUpgradePurchase={this.props.handleUpgradePurchase}/>
        <div className="eight wide stretched column">
          <div className="ui raised segment">
            <WelcomeMessage name={this.props.username}/>
            <ClickerMain passScoreChange={this.props.passScoreChange}/>
            <ClickerScoreDisplay score={this.props.score}/>
          </div>
        </div>
        <ClickerBuildings/>        
      </div>
		)
	}
}


export default ClickerPage;