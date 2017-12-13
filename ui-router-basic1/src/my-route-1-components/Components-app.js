import React from 'react';
import {UISrefActive, UISref, UIView} from 'ui-router-react';

const App = () => (
  <div>
    <UISrefActive class="active">
      <UISref to="hello"><a>Hello</a></UISref>
    </UISrefActive>{' '}
    <UISrefActive class="active">
      <UISref to="about"><a>About</a></UISref>
    </UISrefActive>{' '}
    <UISrefActive class="active">
      <UISref to="people"><a>People</a></UISref>
    </UISrefActive>

    <UIView/>
  </div>
);

export default App;