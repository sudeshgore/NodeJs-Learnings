/*
    Problem 2: Variables (var and const)
        Create a JavaScript program to calculate the area of a rectangle. Ask the user for the length
        and width of the rectangle and store them in variables. Calculate and display the area using
        the formula: `area = length * width`.
*/ 

var prompt = require('prompt-sync')();

const length = prompt("Enter lenght: ");
const width = prompt("Enter width: ");

const area = length*width;
console.log("Area of rectangle: ", area);
