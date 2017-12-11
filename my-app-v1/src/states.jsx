import PeopleService from './common/peopleService';

import About from './components/About';
import Hello from './components/Hello';
import People from './components/People';
import Person from './components/Person';

export const hello = {
  name: 'hello',
  url: '/hello',
  component: Hello
}

export const about = {
  name: 'about',
  url: '/about',
  component: About
}

export const people = {
  name: 'people',
  url: '/people',
  component: People,
  resolve: [{
    token: 'people',
    resolveFn: () => PeopleService.getAllPeople()
  }]
}

export const person = {
  name: 'person',
  url: '/people/:personId',
  component: Person,
  resolve: [{
    token: 'person',
    deps: ['$transition$'],
    resolveFn: (trans) => {
    //  console.log("in the resolve of People",PeopleService.getPerson(trans.params().personId));
      PeopleService.getPerson(trans.params().personId); 
    
    }
  }]
}