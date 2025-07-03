// # - Creating callback function.

// function callback(){
//     console.log("This is callback function, and needs to be call by some another function.");
// }

// const add = function(a, b, callback){
//     var result = a*b;
//     console.log("Result: ", result);
//     callback()
// }

// add(3,4, callback);


// # - FileSystem and Operating system libraries.
// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log("User information: " , user);
// console.log("Username: " , user.username);

// fs.appendFile('Greeting.txt',  'Hi, ' + user.username + '!\n' , ()=>{
//     console.log("File is created!");
// });

// # Importing data from one file to another file
// const notes = require('./notes.js');
// console.log("Server file is available!");

// var age = notes.age;
// var result = notes.addNumber(age, 10);
// console.log("Current age: ", age);
// console.log("After 10 years age: ", result);

// # Using lodash library.
var _ = require('lodash');

var data = ["person", "person", "Sudesh", "AIR-8", 8, 1, 8];
// Returning the unique data
var filter = _.uniq(data);
console.log(filter);

// Checking is it string or not
console.log(_.isString('Sudesh')); // return true
console.log(_.isString(3)); // return false
console.log(_.isString(true)); // return false - because 'true' is boolean
console.log(_.isString(false)); // return false - because 'false' is boolean





