// Написать свою функцию bind

function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args);
  };
}
function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = { name: 'Almat', age: 32, job: 'Frontend' };
const person2 = { name: 'Dulat', age: 32, job: 'Network Engeener' };

bind(person1, logPerson)();
bind(person2, logPerson)();
