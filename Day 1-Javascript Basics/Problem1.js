var prompt = require('prompt-sync')();
const age = prompt("Please enter your age to check the discount: ");
if(age < 18){
    console.log("You get a 20% discount!");
}
else if(age >= 18 && age <= 65){
    console.log("Sorry, normal ticket price applied!");
}
else {
    console.log("You get a 30% senior discount!");
}