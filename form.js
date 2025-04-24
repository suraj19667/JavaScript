
let val=()=>{
    
   let inputname= document.querySelector("#name").value
   let inputnumber=document.querySelector("#number").value
   let inputemail=document.querySelector("#email").value
   let inputpass=document.querySelector("#pass").value
   let inputcpass=document.querySelector("#cpass").value

   let errname=document.querySelector("#errname")
   let errnumber=document.querySelector("#errnumber")
   let erremail=document.querySelector("#erremail")
   let errpass=document.querySelector("#errpass")
   let errcpass=document.querySelector("#errcpass")


   if(inputname==""){
    errname.innerHTML="Please enter your name!"
    errname.style.color="red"
    return false
   }


   else if(inputnumber==""){
      errnumber.innerHTML="Please enter your number!";
      errnumber.style.color="red"
      return false
   }

  else if(isNaN(inputnumber)){
      errnumber.innerHTML="Please enter a valid number!";
      errnumber.style.color="red"
      return false
   }
   //if ans is number return false
   else if(inputnumber.length!=10){
      errnumber.innerHTML="Please enter 10 digit !";
      errnumber.style.color="red"
      return false
   }
   
   else  if(inputemail==""){
      erremail.innerHTML="Please enter your email!";
      erremail.style.color="red"
      return false
   }
   
   else if(!(inputemail.indexOf('@') && inputemail.indexOf('.com'))){
      erremail.innerHTML="Please enter a valid email!";
      return false

   }
   
   
   else if(inputpass==""){
      errpass.innerHTML="Please enter your password!";
      errpass.style.color="red"
      return false
   }


   else if(inputcpass==""){
      errcpass.innerHTML="Please enter your confirm password!"
      errcpass.style.color="red"
      return false
   }
   else if(inputpass!=inputcpass){
      errcpass.innerHTML="Password not matched!"
      errcpass.style.color="red"
      return false
   }

}