let Arr1=["Apple",2,"Banana"]

let fruits={
    name:"Suraj",
    age:21
}
//Array of Object
let UserData=[{
    name:"Suraj",
    age:21,
    city:"Bhopal"

},
{
    name:"Amit",
    age:22,
    city:"Indore"
},
{
    name:"Rahul",
    age:34,
    city:"Delhi"
}]

let datashow=document.querySelector("#datashow")


UserData.map( (e)=>{
    datashow.innerHTML+=`
    <tr>
    <td> ${e.name}</td>
    <td> ${e.age}</td>
    <td> ${e.city}</td>
    </tr>
    `
})