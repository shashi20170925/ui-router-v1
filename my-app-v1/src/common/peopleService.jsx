
//let cache = null;
import * as Promise from 'bluebird';

const people = require('../data/people.json');
const person = require('../data/person.json');


const getAllPeople = () => {
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(people);
    }, 1000);
  });
}

const getPerson = (id) => {
  //console.log("in the person",people );
 // const prsn = people.find(p => p.id === id);
  //console.log("in the person",prsn );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(person);
    }, 1000);
  });
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(people.find(person => person.id === id));
  //   }, 1000);
  // });


  // return getAllPeople()
  //   .then(people => people.find(person => person.id === id));
}

export default {
  getAllPeople,
  getPerson
  
}