// for loop
// for (let k=1;k<=5;k++){
//     console.log(i)
// }


// while loop
// let i=1;
// while(i<=5){
//     console.log("hello");
//     i++;
// }

// do while loop
// let j=1;
// do{
//     console.log("hi");
//     j++;
// }while(j<=5);

//for of loop
// let str="javascript";
// for(let i of str){
//     console.log("i=",i)
// }

//for in loop

let student={
    name:"suraj",
    rollno:23,
    mob_no:3232323232,
    address:"bhopal"
}
for (let val in student){
    console.log("key",val, "value",student[val])
}