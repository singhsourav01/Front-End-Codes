// 1 Function Decleration

function Myfunction(val){
    return val * val;
}
// console.log(Myfunction(5));



// 2. Function Expression
x = function (){
    alert("Hellow");
}
// console.log(x());



// 3. The Function Constructor.

let ConstructorFunc = new Function("a", "b", "return a + b");
// console.log(ConstructorFunc(2,2));



// 4. Self Invoking Function

let myFunc = (function(){
    // alert("Hellow World")

})();



// 5. Function as values

function Product(a,b){
    return a * b;
}
let y = Product(2,4);
// console.log(y);



// 6. Functions as objects.

var body = "return Math.PI * rad * rad";

var circle = new Function("rad", body);
// console.log(circle(5));




// 7. Array Function

const MYfunc = (a,b,c) => a * b * c;
let product = MYfunc(1,2,3);
console.log(product);



