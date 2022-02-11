const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Variable Scope</h1>`;

// Global Scope
// Create a variable with global scope, and then print it to the console by using it inside a Function
const computer='dell';
const novo=()=>{
  console.log(computer);
}

// Function Scope
// Create a function, and then create a variable inside that function. Print the variable to the console:
// 1. inside the function (both before and after the declaration) // 2. outside the function to see the difference
function city(){
  const human='weed';
  console.log(human);
}
console.log(human);

// Block Scope
// Create a function, and then create a variable inside an if statement in that function. 
// Print the variable to the console inside the block and outside the block to see the difference
// Note: StackBlitz may hide the error from you; you can look in the page's developer tools to see the answer, or copy this section to an HTML page
function home(){
  if(table){
    const chair='wood';
    console.log(chair);
  }
  cosole.log(chair);
}

// var, let, const
// Declare a variable with each of the above keywords, two for const (one that has a number, string, or boolean and one object or array)
// Try to alter the value of each variable and see what happens in each scenario
// On the object or array, try adding to the array or altering an attribute on the object as well as reassigning the value
var cup='tea';
let car='bmw';
const age=25;
const work=['tasks', 'breaks', 'coffe'];
cup='juice';
car='mercedes';
age=26;
work=['lawyer', 'count', 'technical'];

// Value vs. Reference
// Declare a variable with a value of a number, string, or boolean, then copy it to another Variable
// Log both variables, then change the value of one and log them again
// Declare a variable with a value of an object or an array, then copy it to another Variable
// Log both variables, then change the value of an attribute on one object or add an item to one array and log them again.
let pants='black';
let shoes='black';
console.log(pants);
console.log(shoes);
shoes='red';
console.log(shoes);
let farm=['cow', 'horse'];
let animal=['cow', 'horse'];
console.log(farm);
console.log(animal);
farm=['cow', 'horse', 'cat'];
console.log(farm);