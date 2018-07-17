
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FruitBasket from './FruitBasket';


class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
    	filters: [],
    	fruit: [],
    	currentFilter: null
    };
  }

  componentDidMount() {
    fetch('/api/fruit')
   

      .then(response => response.json())
      .then(fruit => this.changeFruitState(fruit));

  }

  changeFruitState = (fruit) => {
  	this.setState({fruit: fruit})
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
   
    this.setState({ currentFilter: event.target.value });

  }

render() {
	console.log('state', this.state)
    return (
    	<FruitBasket currentFilter={this.state.currentFilter} fruitList={this.state.fruit} handleChange={this.handleFilterChange} />
    );
}

}


export default App;
