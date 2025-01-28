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
let password = document.getElementById("uPass");
let show = document.getElementById("show");
let check = document.getElementById("check");
let gender = document.getElementsByName("gender"); // Use `getElementsByName` for radio buttons.

check.addEventListener("click", (event) => {
    if (event.target.checked == true) {
        password.setAttribute("type", "text");
        show.innerText = "Hide password";
    } else {
        password.setAttribute("type", "password");
        show.innerText = "Show password";
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    let gen = "";

    // Loop through radio buttons and find the selected one
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            gen = gender[i].value;
            break;
        }
    }

    let userDetails = {
        username: un,
        password: up,
        gender: gen,
    };

    console.log(userDetails);
    sessionStorage.setItem("userdata", JSON.stringify(userDetails));
});



