//synchronous code
//settimeout and setinterval 

console.log("Task given");

//setTimeout (function,delay) delay=>inmilliseconds

setTimeout(() => {

    console.log("In Process")
    
}, 1); //2 seconds


console.log("Task Completed");




//=> Syntax of setTimeout
//setTimeout
//Function
//delay

let i=0;
let inteval
let okk=()=>{
   inteval= setInterval(()=>{
        console.log(i)
        i++;
        
    },2000)
}
let stopp=()=>{
    clearInterval(inteval);
}
