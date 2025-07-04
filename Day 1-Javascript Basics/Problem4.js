/*
    Problem 4: Arrays
        You're organizing a party and want to keep track of the guest list. Create an array called
        "guestList" and add the names of at least five guests. Then, write a program that checks if a
        given name is on the guest list. If the name is found, display "Welcome to the party, [name]!";
        otherwise, display "Sorry, you're not on the guest list."
*/
// Based on Narniya theme

var prompt = require('prompt-sync')();

const guestList = ["Peter", "Sussain", "Adam", "Lucy", "WhiteWitch"]
const guestName = prompt("Enter the name: ");

if(guestList.includes(guestName)){
    let idx = 0;
    for (let i = 0; i < guestList.length; i++) {
        if (guestName == guestList[i]) {
            idx = i;
            break;
        }
    }
    if(idx % 2 == 1 && idx == 4){
        console.log(`Get lost bi*ch: ${guestList[idx]}`);
    }
    
    else if(idx%2 == 1){
        console.log(`Welcome to party, queen of Narniya: ${guestList[idx]}!`);
    }
    else {
        console.log(`Welcome to the party, King of Narniya: ${guestList[idx]}`);
    }
}
else {
    console.log("Ask for permission to Aslan!");
}



