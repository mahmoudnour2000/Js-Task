// Array
//const cars = ["Saab", "Volvo", "BMW"];

const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

console.log (`Hello ${cars[2]}`);

//Function

const x = function (a, b) {return a * b};
let z = x(4, 3);

console.log(z);

//loop
let i = 5;
for (let i = 0; i < 10; i++) {}

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let c = 0;
let text = "";

while (cars[c]) {
text += cars[c];
i++;
}


console.log(i);

//Global scope

var m = "BMW";
let n = "Volvo";  
let s = "Saab"; 


console.log(m);
console.log(n);
console.log(s);

function myFunction() {
    let carName = "Volvo";}