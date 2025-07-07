/*
     Problem 5: Using 'os' Module
        Create a Node.js program that uses the os module to display the following system
        information:
        ● Total memory available (in bytes)
        ● Free memory available (in bytes)
        ● Operating system platform
        ● Numberof CPUcores
*/

var os = require('os');

const totalMemory = os.totalmem();
console.log("Total memory available in system (in Bytes):", totalMemory);
 
const FreeMemory = os.freemem();
console.log("Memory available in system (in Bytes):", FreeMemory);

const OSplatform = os.release();
console.log("Operating system plateform:", OSplatform);

const CPU_cores = os.cpus();
console.log("Number of CPU cores:", CPU_cores);




