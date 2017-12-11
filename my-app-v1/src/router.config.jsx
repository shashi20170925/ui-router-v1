import {pushStateLocationPlugin} from 'ui-router-react';
//import {visualizer} from 'ui-router-visualizer';

import {hello, about, people, person} from './states';

export const plugins = [
  pushStateLocationPlugin
]

export const states = [
  hello,
  about,
  people,
  person
]

// the config function takes the router
// instance as argument. it lets you manully
// configure the router
export const config = (router) => {
  // Setup the state visualizer
 // visualizer(router);  
}