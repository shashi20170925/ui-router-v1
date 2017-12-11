import React, {Component} from 'react';
import {UISref} from 'ui-router-react';

export default class Person extends Component {
  render () {
    let {person} = this.props.resolves;
    return (
      <div>
        <h3>A person!h</h3>
  
        <div>Name: {person.name}</div>
        <div>Id: {person.id}</div>
        <div>Company: {person.company}</div>
        <div>Email: {person.email}</div>
        <div>Address: {person.address}</div>
        
        <UISref to="people"><button>Close</button></UISref>
      </div>
    );
  }
}

// Person.propTypes = {
//   resolves: PropTypes.shape({
//     person: PropTypes.object
//   })
// }