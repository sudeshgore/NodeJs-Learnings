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
var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log("User information: " , user);
console.log("Username: " , user.username);

fs.appendFile('Greeting.txt',  'Hi, ' + user.username + '!\n' , ()=>{
    console.log("File is created!");
});


