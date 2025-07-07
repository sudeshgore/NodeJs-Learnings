/* 
    Problem 6: 'lodash' Usage
        Use the lodash library to solve the following problem: Given an array of numbers, write a
        function that returns the sum of all even numbers in the array. Use the _.sumBy function from
        lodash to achieve this.
*/

var _ = require('lodash');

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const  evenSum = _.sumBy(arr, (i)=> { if(i%2==0) return i; })
console.log("Sum of even numbers in an array:", evenSum);

const oddSum = _.sumBy(arr, (j)=>{ if(j%2==1) return j; })
console.log("Sum of odd numbers in an array:", oddSum);
    


