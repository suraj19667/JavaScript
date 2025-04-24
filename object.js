// let Fruits=["suraj",25,"bhopal"]//Array

// let obj={
// //key:value
// Name:"suraj",
// Age:25,
// City:"bhopal",
// //Age:20 key should be unique
// }
// // console.log(obj);//to print full object
// // console.log(obj.Age); //To access the value of key Age
// // obj.College="Cybrom";
// // obj.Age=26;
// delete obj.Age; //To delete the key Age

// console.log(obj);

// ==============2nd topic=================

    // let obj = {name:"suraj",age:25,city:"bhopal"};
    // let  {name,age} = obj;

    // console.log(name);
    // console.log(age);


    //============3rd topic ============

    //for in => used in object
    //for of=> used in array,string

// let Fruits={
//     name:"suraj",
//     age:20,
//     city:"bhopal"
// }

// for(let key in Fruits){
//     console.log(key," ",Fruits[key]);
    
// }

// let arr1=["hello","world","bhopal"]
// for(let suraj of arr1){
//     console.log(suraj)
// }

//=========== Map method =============
//Map,filter,forEach => very inmportant

let num=[1,2,3,4,5,6,7,8,9,67,56];

// let newarr=num.map((e)=>{

//     return e*2;
// })

// console.log(newarr);

//  const newArray = originalArray.map((item) => {
//   return /* something based on item */;
// });

//========== Filter Method ========

// let newarr1=num.filter((e)=>{
//     return e%2==0;
// })
// console.log(newarr1);

// let newarr1=num.filter((e)=>{
//     return e>6;
// })
// console.log(newarr1);

//=========== forEach method ==
//this are not return anything

num.forEach((e)=>{
    console.log(e%2==0);
})

