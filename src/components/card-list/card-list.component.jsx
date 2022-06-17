import { Component } from "react";

class CardList extends Component{
	render(){		
		const {monsters} = this.props;
		console.log(monsters)
		return(
			<div>
			{monsters.map((monster)=>(				
				<div class="card-container" key={monster.id}>
					<img
						alt={`monster ${monster.name}`}
						src={`https://robohash.org/${monster.id}?set=set2`}
					/>
					<h2>{monster.name}</h2>
					<p>{monster.email} </p>
				</div>	
			))
			}
			</div>
		);		
	}
}

export default CardList;