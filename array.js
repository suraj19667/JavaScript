// let Fruits=["Apple","Mango","Banana","Grapes"]  //array

// Fruits.splice(1,0,"Orange"); //where to add, how many to delete, what to add

// console.log(Fruits.slice(1,3));

// console.log(Fruits[2]); //accessing array
// console.log(Fruits.length); //length of array
// Fruits.pop(); 
// console.log(Fruits);
// Fruits.push("Pineapple");
// console.log(Fruits);
// Fruits.pop()
// Fruits.pop()
// Fruits.shift();
// console.log(Fruits);

let arr1=["ram","shyam","sita","gita"]
let arr2=["apple","banana","mango"]
let arr3=["ramesh","aman"]

let arr4=arr1.concat(arr2,arr3)
console.log(arr4)

let arr=[2,6,3,7,1,8,4,5]
// console.log(arr.sort()); 
// console.log(arr.reverse()); //reverse the array
console.log(arr.sort((a,b)=>a-b)); //ascending order
console.log(arr.sort((a,b)=>b-a));