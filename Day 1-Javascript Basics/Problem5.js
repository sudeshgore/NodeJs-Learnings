/* 
    Problem 5: JSON (JavaScript Object Notation)
        You're working on a weather app. Create a JSON object representing the weather forecast for
        a specific day. Include properties like "date," "temperature," "conditions," and "humidity."
        Display the information using console.log.
*/


const weatherReport = {
    date : "04-07-25",
    temperature : 27,
    condition : "Rainy",
    humidity : 89 
};


console.log("Weather Report:- ");
console.log("   Today's date: ", weatherReport.date);
console.log("   Today's temperature: ", weatherReport.temperature);
console.log("   Today's condition: ", weatherReport.condition);
console.log("   Today's humidity: ", weatherReport.humidity);

