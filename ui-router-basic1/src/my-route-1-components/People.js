import React, {Component, PropTypes} from 'react';
import {UISref} from 'ui-router-react';

export class People extends Component{

    render(){
let {people}=this.props.resolves;
let list = people.map(person=>(   <li key={person.id}>
    <UISref to="person" params={{personId:person.id}}>
      <a>{person.name}</a>
    </UISref>
  </li> ));

return (
    <div>
      <h3>Some people:</h3>
      <ul>
        {list}
      </ul>
    </div>
  );
    }

}