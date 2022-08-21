// Map - The map method creates a new array and performs a function on each array element.
let num1 = [2,3,4,5,6,7];

let num2 = num1.map(multiply);
function multiply(value){
    return value * 2;
}

// console.log(num2);



//Filter - filter method takes each element  in an array and it applies a conditional statement against it.

let num3 = num1.filter(comp);

function comp(value){
    return value > 4;
}
// console.log(num3);



// Reduce - The reduce method reduces an array of values down to just one value using a function

let num4 = num1.reduce(sum);
function sum(total, value){
    return total+ value;
};
console.log(num4);