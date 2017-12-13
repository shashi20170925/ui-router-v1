import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from 'ui-router-react';
import axios from 'axios';
import {Hello} from './Hello';
import PeopleService from './peopleService';

let helloState = {
    name: "hello",
    url: "/hello",
component: Hello,
resolve: [{
    token: 'languages',
    resolveFn: () => {return (axios.get('http://localhost:11111/v1/invites/invitelanguages'))}
  }]
}
let aboutState={
    name: "about",
    url:"/about",
    component: ()=><div> <h1>This is about component </h1></div> 
}

ReactDOM.render(
    <UIRouter plugins={[pushStateLocationPlugin]} states={[helloState, aboutState]}>
        <div>
            <ul>
                <li >           <UISref to="hello"><h1>Hello</h1></UISref>

                </li>

                <li>
                    <UISref to="about"><h1>About</h1></UISref>

                </li>
            </ul>
            <UIView />

        </div>
    </UIRouter>

    , document.getElementById('react-app'));

registerServiceWorker();
