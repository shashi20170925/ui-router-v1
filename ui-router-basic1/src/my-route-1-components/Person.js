import React, { Component, PropTypes } from 'react';
import { UISref } from 'ui-router-react';


export class Person extends Component {
    render() {

        let { person } = this.props.resolves;

        return
        <div>
            I am in the person component
<br />
            <UISref to="people"><button>Close</button></UISref>

        </div>

    }


}