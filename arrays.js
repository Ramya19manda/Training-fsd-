// let users=["Ramya","SaiSmitha","Sai nikhil","Rahul","NtR"];
// let x=users.forEach((user)=>{
//     return user;
// });
// console.log(x);

let userDetails={
    name:"ram",
    age:25,
    city:"hyd"

};
console.log(userDetails);
let x=JSON.stringify(userDetails);
console.log("JSON object "+x);
let y=JSON.parse(x);
console.log(y);