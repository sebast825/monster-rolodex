import { Component } from "react";
import "./card-list.styles.css"
import Card from "../card/card.component";
class CardList extends Component{
	render(){		
		const {monsters} = this.props;
		// console.log(monster)	
		return(
			<div class="card-list">
			{monsters.map((monster)=>{
				const {name,id,email} = monster;
				return(	
							
					<Card monster={monster}></Card>
			)})
			}
			</div>
		);		
	}
	// desde desktop
}

export default CardList;