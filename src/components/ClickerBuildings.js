import React from 'react';
class ClickerBuildings extends React.Component{

	render(){
		return(
	        <div className="four wide column">
	          <div className="ui vertical fluid menu">
	            <h2 className="item">Buildings</h2>
	            	{this.props.buildings.map((building) => {
	            		return (
	            			<div className="item" key={building.id}>
		            			<h3>{building.name}</h3>
		            			<p>Generates {building.generationPower} per second</p>
		            			<p>You have {building.amount} {building.name}s</p>
		            			<p>Buying one will cost {building.price}</p>
								<button onClick={() => this.props.handleBuildingPurchase(building.id)} >Buy</button>		            			
	            			</div>
	            		)

	            	})
	            	}
	          </div>
	        </div>
		)
	}
}
export default ClickerBuildings;