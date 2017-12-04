import React from 'react';
import ReactDOM from 'react-dom';
import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from 'ui-router-react';
import registerServiceWorker from './registerServiceWorker';

var helloState = {
  name: 'hello',
  url: '/hello',
  component: () => <h3>hello world</h3>
}

var aboutState = {
  name: 'about',
  url: '/about',
  component: () => <h3>Its the UI-Router hello world app!</h3>
}

ReactDOM.render(
  <UIRouter plugins={[pushStateLocationPlugin]} states={[helloState, aboutState]}>
    <div>
      <UISrefActive class="active">
        <UISref to="hello"><a>Hello</a></UISref>
      </UISrefActive>
      <UISrefActive class="active">
        <UISref to="about"><a>About</a></UISref>
      </UISrefActive>

      <UIView/>
    </div>
  </UIRouter>,
  document.getElementById('root')
);
registerServiceWorker();
