let cache = null;

const getAllPeople = () => {
  console.log("in the getALlPeople");
  return fetch('data/people.json')
    .then((response) =>  {response})
    .then((d)=>d)
}

const getPerson = (id) => {
  return getAllPeople()
    .then(people => people.find(person => person.id === id));
}

export default {
  getAllPeople,
  getPerson
}