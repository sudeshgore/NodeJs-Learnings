/* 
     Problem 4: Using the 'fs' Module
        Write a Node.js program that uses the fs module to read the contents of a text file named
        "notes.txt" and display them in the console.
*/

var fs = require('fs');

const fileData = fs.readFileSync('./Greeting.txt', 'utf-8', (err, data) =>{
    if(err){
        console.log("Error occured in file", err);
        return;
    }
    else 
        console.log("Data from another file: ", data);
});

console.log(fileData);
