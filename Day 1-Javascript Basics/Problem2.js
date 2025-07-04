var prompt = require('prompt-sync')();

const length = prompt("Enter lenght: ");
const width = prompt("Enter width: ");

const area = length*width;
console.log("Area of rectangle: ", area);
