let Arr=["Suraj",20,"Dipak"]

let student={
    
    name:"Suraj",
    age:20,
    city:"Bhopal"
}

let GetData=[{
    name:"suraj",
    age:20,
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

let getdata=document.querySelector("#getdata")

GetData.map((e)=>{

    getdata.innerHTML+=`

    <div>
    <h1>${e.name}</h1>
    <h1>${e.age}</h1>
    <h1>${e.city}</h1>
    </div>
    `
})