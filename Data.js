//let MyData= new data()
//console.log(MyData.toLocaleString) //Readable formate
//console.log(MyData.goFullYear())
//console.log(MyData.getDate()) //Date
//console.log(MyData.getHour()) //Hour
//console.log(MyData.getMinute()) //Minute
//console.log(MyData.getSecond()) //Second

//let MyData   = new Date()
// let Days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
//console.log(Days[MyData.getDay()]) //Day

setInterval(() => {
    
    let CurDate = new Date()
    let showTime=document.querySelector("#showing")
    showTime.innerHTML=`${CurDate.getHours()}:${CurDate.getMinutes()}:${CurDate.getSeconds()}`
},1000)

// console.log(Math.random(Math.random()*10));