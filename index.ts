// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
function Person(age){
  this.age = age

  this.growOld = () => this.age++;

};
var person = new Person(1);
console.log(person.age);


