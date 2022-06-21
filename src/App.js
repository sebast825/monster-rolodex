import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
 import CardList from './components/card-list/card-list.component';
 import SearchBox from './components/search-box/search-box.components';


class App extends Component {
 
  constructor(){
    super();
    this.state = {
      monsters: [],
      //here is the key word
      searchField:'',
      };
  }
//the first time a component renders works the function componentDidMount
//that means it will activate each time the co,´pnent is puted in the DOM
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((users)=>
     this.setState(      
      ()=>{
        return {monsters: users};
      }
    ));
}

onSearchChange = (e)=>{
  // console.log(e.target.value);
  const searchField = e.target.value.toLowerCase()
//modify this.state, this will do update the render so will look reflected in FE

  this.setState(()=>{
    return {searchField};
  })

  console.log(this.state.searchField)
}

  render() {
    //alow us to don't have to write each tiem this.state and use directly what we need
    const { monsters, searchField} = this.state;
     const { onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField)});
      
   
      return (
   
      <div className="App">
             <h1 class="app-title">Monster Roledex</h1>
        {/* 48 completed*/}
      
      <SearchBox onChangeHandler={onSearchChange} />



      <CardList monsters={filteredMonsters} />



			
			
      </div>
    );
  } 
 } 

export default App;

// 