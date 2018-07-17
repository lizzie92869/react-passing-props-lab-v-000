import React from 'react';

// class Filter extends Component {
//   constructor() {
//     super();

//     this.state = {
//       //['berry', 'pepo', 'pome', 'citrus', 'drupe', 'other'] after fetching
//       filters: []
//     };
//   }

//   componentWillMount() {
//     this.fetchFilters();
//   }

// //get the names of the different types of fruits: ['berry', 'pepo', 'pome', 'citrus', 'drupe', 'other'] and change the state for this array
//   fetchFilters = () => {
//     fetch('/api/fruit_types')
//       .then(response => response.json())
//       .then(filters => this.setState({ filters }));
//   }


// //display the filter menu
//   render() {

//     return (
//       <select onChange={this.props.handleChange} defaultValue='all'>
//         <option value='all'>All</option>
//         {this.state.filters.map(filter =>
//           <option key={filter} value={filter}>{filter}</option>
//         )}
//       </select>
//     );
//   }
// }



 // const filters = ['all', 'berry', 'pepo', 'pome', 'citrus', 'drupe', 'other']
const Filter = (props) => {
  console.log(`props from Filter:`, props)
  return (

    <select onChange={props.handleChange} defaultValue='all'>
         <option value='all'>All</option>
         {props.filters.map(filter =>
           <option key={filter} value={filter}>{filter}</option>
         )}
    </select>
    )
}

Filter.defaultProps = {
  filters: ['all', 'berry', 'pepo', 'pome', 'citrus', 'drupe', 'other'],
  //noOp empty function or use propType with isRequired
  handleChange(){}
};

export default Filter;
