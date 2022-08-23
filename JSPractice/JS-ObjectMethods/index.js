var car = {
    model: "BMW 320d",
    color: "Navy Blue",
    fuel_type: "Diesel",
    get fule(){
        return this.fuel_type;
    }
}

// console.log(car.fule)


//Setter in Js

var car = {
    model : "Auid A4",
    color: "Bright Red",
    fule_type: "",
    set fuel(fuel){
        this.fuel_type = fuel;
    }
}

car.fuel = "Petrol";
// console.log(car.fuel_type);

var value = 50;
function My_function(){
    var value = 100;
    // alert("value: " + value);
    // alert("This value: " + this.value)
}
My_function()


let name = "Harsh";
const random = {
    name: "Sourav", 
    info(){
        // console.log("Hi!! my name is " + this.name);
    }
}
random.info();


var myName = "Sourav";
function MyName(){
    var myName = "Harsh";
    console.log(myName);
    console.log(this.myName)
}
// MyName()

// If in any object we create a function then it is called a global function else it is an local function.



//perfect example for foreach Loop.
//ForEach method takes two properties one is the function and other is object.
const ranndom = {
    name: "Sourav",
    video: ["JavaScript", 'Python', "HTML", "CSS"],
    info(){
        this.video.forEach(function(tag){
            console.log(tag, this.name);
        }, this)
    }
}

ranndom.info()