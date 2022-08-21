//Object
let student = {
    name : 'Sourav', 
    age : 19, 
    studies : "Computer Science"
};

// console.log(student.name + " " + " and my age is " + student.age);

//2nd to method to create a object
var students = new Object();
students.name = "Harsh Singh"
students.age = 19;

// console.log(students.name);

//3rd method to create a object
function stud(name, age, studies){
    this.name = name;
    this.age = age;
    this.studies = studies;
}

let anyOne = stud('Sourav Singh', 19, 'It');
// console.log(anyOne);




//Object Property.

//1st way to change the value of the object
student.age = 10;
// console.log(student.age);