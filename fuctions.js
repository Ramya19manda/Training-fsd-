//!function
function userDetails(name , age , city){
    console.log(name);
    console.log(age);
    console.log(city);

    
}
userDetails("Ramya" , 20 , "hyd");

//! function expression
let b = function(){
    console.log("function expression is execting");
};
b();

//! IIFE
(function(){
    console.log("IIFE");
})();

//! Arrow function
//used to consise the norma; function syntax
//similar to ananymous function
let a = ()=>console.log("Arrow functional");
a();

let y =(a , b)=>console.log(a+b);
y(5);

let x=_=>{console.log("Hi");
        console.log("hello");
        console.log("bye");};
x();          


//******
const rows = 5;
const columns = 6;
for (let i = 0; i < rows; i++) {
  let row = "";
  for (let j = 0; j < columns; j++) {
    row += "*   "; 
  }
}
  console.log(row.trim());