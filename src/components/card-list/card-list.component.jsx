import { Component } from "react";
import "./card-list.styles.css"
import Card from "../card/card.component";
class CardList extends Component{
	render(){		
		const {monsters} = this.props;
		//  console.log(monsters)	
		return(
			<div class="card-list">
			{monsters.map((monster)=>{
			
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