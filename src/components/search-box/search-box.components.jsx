import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component{

	render(){

		return(
			<input 
			className={`search-box ${this.props.className}`}
			placeholder="search monsters"
			type="search" 
		//the funcion is outside the render, because if it is inside each time we use it have to re upload, will do the app slower
		//if it is outside only upload one time with the component
		  onChange={this.props.onChangeHandler}
			  />
		)
	}
}

export default SearchBox;