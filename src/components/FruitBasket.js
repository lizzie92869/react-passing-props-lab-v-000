import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

// class FruitBasket extends Component {
//   constructor() {
//     super();

//     this.state = {
//       filters: [],
//       selectedFilter: null
//     };
//   }

// // set the selected filter to the targeted values
//   handleFilterChange = event => {
//     console.log('new filter: ', event.target.value);
//     this.setState({ selectedFilter: event.target.value });
//   }

// //display filter and filtered fruit lists on the change of the value of filter
//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter handleChange={this.handleFilterChange} />
//         <FilteredFruitList
//           filter={this.state.selectedFilter} />
//       </div>
//     );
//   }
// }



const FruitBasket = (props) => {
  console.log('props from FruitBasket', props)
  return (
    <div className="fruit-basket">
      <Filter currentFilter={props.currentFilter} handleChange={props.handleChange} fruitList={props.fruitList}/>
      <FilteredFruitList currentFilter={props.currentFilter} fruitList={props.fruitList}/>
    </div>
  )
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: ['all', 'berry', 'pepo', 'pome', 'citrus', 'drupe', 'other'],
  currentFilter: null,
  updateFilterCallback(){}
};

export default FruitBasket;
