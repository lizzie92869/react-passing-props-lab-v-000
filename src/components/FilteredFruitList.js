import React from 'react';

// class FilteredFruitList extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       items: []
//     };
//   }

//   // fetch the fruits list and place it in the items state
//   componentDidMount() {
//     fetch('/api/fruit')
//       .then(response => response.json())
//       .then(items => this.setState({ items }));
//   }

//   render() {
   
//     // if list is not what is defined by the filter or the default value 'all', return the current list of fruits, else filters it by fruit_type
//     // filter = this.state.selectedFilter from FruitBasket
//     const list = !this.props.filter || this.props.filter === 'all' ? this.state.items : this.state.items.filter(i => i.fruit_type === this.props.filter);

//     //
//     return (
        
//       <ul className="fruit-list">
//         {list.map((item, index) => <li key={index}>{item.char}</li>)}
//       </ul>
//     );
//   }
// }
const FilteredFruitList = (props) => {
  console.log('props from FilteredFruitList: ', props)
  const list = !props.currentFilter || props.currentFilter === 'all' ? props.fruitList : props.fruitList.filter(i => i.fruit_type === props.currentFilter);

  return (
  <ul className="fruit-list">
      {list.map((item, index) => <li key={index}>{item.char}</li>)}
      </ul>
  )

}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: 'all',
};

export default FilteredFruitList;
