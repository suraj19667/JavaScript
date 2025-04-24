
// let hide=() => {

//     if(document.querySelector("#suraj").style.display=="none"){
//     let text=document.querySelector("#suraj")

//     text.style.display="none";
// }
// let show=() => {
//     let text=document.querySelector("#suraj")

//     text.style.display="block";
// }

function show_hide() {
    let para = document.getElementById("para");
    let btn = document.getElementById("btn");
    if (para.style.display === "none") {
        para.style.display = "block";
        btn.innerHTML = "Hide";
    } else {
        para.style.display = "none";
        btn.innerHTML = "Show";
    }
}


// let count=0;
//    let inc=()=>{
    
//    let Show= document.querySelector("#show")
  
//     count++;
//     Show.innerHTML=count;

//    }

//    let dec=()=>{
//     let Show= document.querySelector("#show")
//     count--;
//     Show.innerHTML=count;
//     if(count<0){
//         count=0;
//         Show.innerHTML=count;
//     }

//    }
//     let reset=()=>{
//      let Show= document.querySelector("#show")
//      count=0;
//      Show.innerHTML=count;
    
//     }

//     let showalert=()=>{
        
//         let name=document.querySelector("#name").value;
//         alert(name);

//     }

