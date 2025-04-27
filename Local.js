let signup=()=>{

    let sinname=document.querySelector("#name").value
    let sinnumber=document.querySelector("#number").value
    let sinemail=document.querySelector("#email").value
    let sinpassword=document.querySelector("#pass").value
    let sinconfirmpassword=document.querySelector("#cpass").value

    if(sinname==""){
        document.querySelector("#errorname").innerHTML="Please Enter Name"
        return false
    }

    localStorage.setItem("Name",sinname)
    localStorage.setItem("Number",sinnumber)
    localStorage.setItem("Email",sinemail)
    localStorage.setItem("Password",sinpassword)
    localStorage.setItem("Confirm Password",sinconfirmpassword)

    location.href="LocalLogin.html"
    return false
}

let Login=()=>{

    let LoginName=document.querySelector("loginname").value
    let loginpassword=document.querySelector("loginpass").value

    let LocalName=localStorage.getItem("Name")
    let LocalPass=localStorage.getItem("Password")

    if(LoginName==LocalName && loginpassword==LocalPass){
        location.href="LocalHome.html"
        return false
    }
    else{
        alert("Your Password and Username is Wrong !")
    }
    return false
}