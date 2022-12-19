// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>

<button  onClick = "document.write (5+6)">Hello</button>`;
function Person(age){
  this.age = age

  this.growOld = () => this.age++;

};
var person = new Person(1);
console.log(person.age);  //1
setTimeout(person.growOld,1000);

setTimeout (function(){console.log(person.age);},2000);  //2


// how do I write results to the document itself ??







