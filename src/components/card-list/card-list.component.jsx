import { Component } from "react";
import "./card-list.styles.css"
class CardList extends Component{
	render(){		
		const {monsters} = this.props;
		console.log(monsters)
		return(
			<div class="card-list">
			{monsters.map((monster)=>{
				const {name,id,email} = monster;
				return(				
				<div class="card-container" key={id}>
					<img
						alt={`monster ${name}`}
						src={`https://robohash.org/${id}?set=set2`}
					/>
					<h2>{name}</h2>
					<p>{email} </p>
				</div>	
			)})
			}
			</div>
		);		
	}
}

export default CardList;