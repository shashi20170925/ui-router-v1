import React from 'react';
import ReactDOM from 'react-dom';
import { UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin } from 'ui-router-react';
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
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <UISrefActive class="active" key="1">
                        <UISref to="hello"><li className="nav-item active"><a href="javascript.void(0);"> Home </a> </li></UISref>

                    </UISrefActive>

                    <UISrefActive class="active" key="1">
                        <UISref to="about"><li className="nav-item active"><a href="javascript.void(0);"> About </a> </li></UISref>

                    </UISrefActive>
                </ul>

            </div>

            {/* 
            <ul>
                <li>
                    <UISrefActive className="active">
                        <UISref to="hello"><a>Hello</a></UISref>
                    </UISrefActive>

                </li>
                <li>
                    <UISrefActive className="active">
                        <UISref to="about"><a>About</a></UISref>
                    </UISrefActive>

                </li>
            </ul> */}


            <UIView />

        </nav>
    </UIRouter>,
    document.getElementById('root')
);
registerServiceWorker();
