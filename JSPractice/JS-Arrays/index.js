//Creating an Array.
let cars = ["BMW", "Volvo", "Honda"];

// console.log(cars);

//How to access the value from the array.
let bmw = cars[0];


//Again we have the array Lenght Propery. And Lenght starts with 1 and keep going.

let len = cars.length;


// How to acces the last array item.(Similarly we can )

let last = cars[cars.length -1];

// Loop over the array Item. Or simily accessing all the elements of cars.

cars.forEach((item)=>{
    // console.log(item);
})



//Array Method

// 1 . String 
let strOpration = cars.toString();
// console.log(strOpration);

//2. Pop - Removes the last items of the array.
// console.log(cars.pop());

//3. Push - Add new element at the end of the array.
// console.log(cars.push('Lamburghni'));

//4. Shift - Remove the first element from the array. And decrease the every elements index by 1.
// console.log(cars.shift());

//5. Unshift - To add the element at the beginning of the array.
// console.log(cars.unshift('Tata'));

//6. Concat - To mearge two array.
let bikes = ['Yamaha', 'Honda', 'Dio', 'Royan Enfield'];

let name = ['sourav', 'shivani','someone', 'others'];
// console.log(bikes.concat(name));

//7. Sort - Sort the array in ascending order. 
// console.log(name.sort());

// 8. Reverse - Reverse the element in the array.
// console.log(name.reverse())