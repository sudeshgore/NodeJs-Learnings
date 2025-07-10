/* 
    Problem 1: Understanding Servers and Express.js
        Explain in your own words what a server is in the context of Node.js. Then, write step-by-step instructions on
        how to create a basic server using Express.js. 

    Answer : Server is a program that respond to request send by an user over the network.

    Steps:
        1] Create one variable named 'express' and import/require express module 
        2] Create another variable named 'app' in that call express() function.
        3] Use get,push, pull methods -> app.get('forward slash+ any nameor blank', fun(request, respond){
            respond.send("Message")  // You will see this message on browser.
        })
        4] Call 'listen' method with parameters - port number and function(to see message on terminal).
*/

const express = require('express')
const app = express();

app.get('/' ,(req, res) => {
    res.send("Hello I'm get method, I will meet you at browser!");
});

app.listen(3000, ()=>{
    console.log("Hello, I'm your port!");
});