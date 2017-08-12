import React from 'react';
class ClickerUpgrades extends React.Component{
	constructor(props){
		super(props);
    this.buyUpgrade = this.buyUpgrade.bind(this);    		
	}
	buyUpgrade(id){
		this.props.handleUpgradePurchase(id);
	}
	render(){
		return(
	        <div className="four wide column">
	          <div className="ui vertical fluid menu">
	            <h2 className="item">Upgrades</h2>
	            		{this.props.upgrades.map(function(upgrade){
	            			if (upgrade.active === false){
	            			return (
							<div className="item" key={upgrade.id}>
								<h3>{upgrade.name}</h3>
								<p>Improves clicking by {upgrade.clickModifier}</p>
								<p>Improves generators by {upgrade.generationModifier}</p>
								<p>Price: {upgrade.price}</p>
								<button onClick={() => this.buyUpgrade(upgrade.id)} >Buy</button>
							</div>	            			
	            		);}
	            		}.bind(this))}

	        	</div>
	        </div>
		)
	}
}
export default ClickerUpgrades;