// console.log(10);
// console.log(20);
// setTimeout(()=>{
//     console.log(30);
// });
// setInterval(()=>{
    // document.writeln("mru");
//     console.log(30);
// },1500);
// console.log(40);
// console.log(50);

//  let p1= new Promise((resolve,reject)=>{});
//  console.log(p1);

//  let p2=new Promise((resolve,reject)=>{
//      resolve("Success");
//      console.log(p2);  
//  });
//  console.log(p2); 
// p2.then((response)=>console.log(response))
// p2.catch((error)=>console.log(error))
// p2.finally(()=>console.log("finally for both"))
// let p3=new Promise((resolve,reject)=>{
//     reject("Failure");

// });
// console.log(p3);
// p3.then(data=>console.log(data))
// .catch(err)

function fetchUsers(){
     let response=fetch("https://jsonplaceholder.typicode.com/users");
     response.then(result=>{
        // console.log(res.json());
        return result.json().then(data=>{
            console.log(data);
            let store =document.getElementById("store");
            console.log(store);
            data.map(user=>{
                store.innerHTML += `
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.company.name}</td>
                </tr>

                `
            })
        })
    })
    .catch(err=>console.log(err))

}
fetchUsers();


