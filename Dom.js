// console.log(window);
// console.log(document);
// let element=document.grtElementById("demo");
// element.innerText="Go+"
// console.log(element);

// let ele=document.getElementsByClassName("test")
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].innerText="Hello"
// ele[0].style.backgroundColor="orange"

// let x=[...ele];
// x.map(element=>{
//     element.style.backgroundColor="tomato"
// })
// let ele=document.querySelector(".test");
// console.log(ele);

// let ele=document.querySelectorAll(".test");
// console.log(ele);

// let btn=document.querySelector("#btn")
// btn.addEventListener("click",()=>{
//     console.log("button clicked");
//     alert("hi");
//     document.body.style.backgroundColor="orange";

// })
// let btn=document.querySelector("#btn")
// btn.addEventListener("click",()=>{
//     console.log("button clicked");
// })

// let divBlock=document.getElementById("divBlock");
// divBlock.addEventListener("mouseover",()=>{
//     document.body.style.backgroundColor="yellow";
    //    divBlock.style.backroungColor="blue";
    
// });

// let bgColor = document.querySelectorAll(".bgColor");
// //console.log(bgColor);
// [...bgColor].map((element)=>{
//     //console.log(element);
//     element.addEventListener("mouseover",()=>{
//         console.log(element.innerText);
//     })
// })

// let ele = document.createElement("h1");
// ele.innetText="Dynamic creation of html element";
// //ele.setAttribute("id","demo");
// ele.id="demo";
// //ele.removeAttribute("id")
// //console.log(ele);

// let image = document.createElement("img");
// image.src = "./3606208.jpg";
// console.log(image);
// // console.log(ele);
// document.body.appendChild(ele);
// document.body.appendChild(image);



let form = document.querySelector("form");
let username = document.getElementById("uName");
let mail = document.getElementById("uMail");
let psw = document.getElementById("uPass");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let uname=username.value;
    let uemail=mail.value;
    let upass=psw.value;
    let userDetails={
        uname,uemail,upass
    };
console.log(userDetails);
localStorage.setItem("userdata",JSON.stringify(userDetails))

});


