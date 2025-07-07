/*
    Problem 3: Callback Functions
        Create a function named performOperation that takes two numbers and a callback
        function as parameters. The callback function should determine the operation to be performed
        (addition, subtraction, multiplication, or division) on the two numbers. Call the
        performOperation function with different numbers and callback functions for each
        mathematical operation.
*/

var prompt = require('prompt-sync')();

var performOperation = function(a, b, operation){
    return operation(a,b);
}

var addition = function (a, b){
    console.log("Additon of two numbers:", a + b);
}
var substraction = function (a, b){
    if( a >= b)
        console.log("Substraction of two numbers:", a - b);
    else 
        console.log("Substraction of two numbers:", b - a);
}
var multiplication = function (a, b){
    console.log("Multiplcation of two numbers:", a * b);
}
var division = function (a, b){
    if(b!=0)
         console.log("Division of two numbers:", a / b);
    else 
        console.log("Invalid value of 'b' for division!");
}

var a = prompt("Enter value of a: ");
var b = prompt("Enter value of b: ");

performOperation(a, b, multiplication);