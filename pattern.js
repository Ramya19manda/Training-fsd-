// for (let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         document.writeln("*")

//     }
//     document.writeln("<br>")
// }

// for(let i=1;i<=5;i++){
// for(let j=1;j<=5;j++){
// if(i>=j){
//             document.writeln("*")
//          }else{
//              document.writeln("&nbsp;");        }
//      }
//      document.write("<br>");
//  }
// Number of rows and columns
let result = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i >= j) {
            result += "*";
        } else {
            result += " ";
        }
    }
    result += "\n";
}
console.log(result);
