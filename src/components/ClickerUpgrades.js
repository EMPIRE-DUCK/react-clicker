import React from 'react';
class ClickerUpgrades extends React.Component{
	render(){
		let limiter = 0;
		return(
	        <div className="four wide column">
	          <div className="ui vertical fluid menu">
	            <h2 className="item">Upgrades</h2>
	            		{this.props.upgrades.map((upgrade) => {
	            			if (upgrade.active === false && limiter < 3){
	            			limiter++;
	            			return (
							<div className="item" key={upgrade.id}>
								<h3>{upgrade.name}</h3>
								<p>Improves clicking by {upgrade.clickModifier}</p>
								<p>Improves generators by {upgrade.generationModifier}</p>
								<p>Price: {upgrade.price}</p>
								<button onClick={() => this.props.handleUpgradePurchase(upgrade.id)} >Buy</button>
							</div>	            			
	            		)}
	            		})}

	        	</div>
	        </div>
		)
	}
}
export default ClickerUpgrades;