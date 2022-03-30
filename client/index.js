const async = require("hbs/lib/async");

console.log("😎Webpack Working👻!!!!");
 //Default parameters

 //arouwn funtions
 let show =(m="❌")=>{
    console.log(m);
 };
 show();
//promises
function resolveAfter2Seconds(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("function resolve")
        },2000);
    });
}
//funcion asincrona
async function asyncCall(){
    console.log("Calling asyn function!!");
    const result=await resolveAfter2Seconds();
    console.log(result);// Imprime function resolve en la consola
}
asyncCall();
     
