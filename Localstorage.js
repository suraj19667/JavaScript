let sendData=()=>{

    let inpname=document.querySelector("#name").value

    localStorage.setItem("Name",inpname)

    localStorage.setItem("Age","23")


    // location.reload()
    location.href=""

}

let show=document.querySelector("#show")

let username=localstorage.getItem("Name")
let userage=localstorage.getItem("Age")
show.innerHTML=`Welcome ${username} and Your Age is ${userage}`

show.innerHTML=localStorage.getItem("Name")



let removeData=()=>{
    localStorage.removeItem("Name")

    //localStorage.clear()
    location.reload()
}

