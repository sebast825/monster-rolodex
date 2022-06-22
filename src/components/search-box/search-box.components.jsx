import './search-box.styles.css';

const SearchBox = ({className,placeholder,onChangeHandler}) =>(
			<input 
			className={`search-box ${className}`}
			placeholder={`${placeholder} `}
			type="search" 
		//the funcion is outside the render, because if it is inside each time we use it have to re upload, will do the app slower
		//if it is outside only upload one time with the component
		  onChange={onChangeHandler}
			  />
		
	)
	



export default SearchBox;