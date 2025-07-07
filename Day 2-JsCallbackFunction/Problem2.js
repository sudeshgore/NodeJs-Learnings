/* 
    Problem 2: Writing Functions
        Write a JavaScript function named calculateCircleArea that takes the radius of a circle
        as a parameter and returns the area of the circle. You can use the formula area = π *
        radius^2. Test the function with a few different radii.
*/

var prompt = require('prompt-sync')();

var calculateCircleArea= function (radius) {
    return 3.14*radius*radius;
}

const radii = prompt("Enter the radius of circle: ");
console.log("Area of the circle is: ", calculateCircleArea(radii));

