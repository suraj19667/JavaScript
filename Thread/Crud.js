let fetchData = async () => {

  try {
    let url = "http://localhost:3000/Hotel"
  
    let res = await fetch(url);
    let data = await res.json();
  
    console.log(data);
  
    let datashow = document.querySelector("#datashow")
  
    data.map((e) => {
      datashow.innerHTML += `
        <tr>
          <td>${e.Name}</td>
          <td>${e.Age}</td>
          <td>${e.Checking}</td>
          <td>${e.Checkout}</td>
          <td>${e.City}</td>
          <td>${e.Person}</td>
          <td>${e.Price*e.Person}</td>

          <td onclick="Del('${e.id}')">Delete</td>
          <td onclick="Formopen('${e.id}')">Update</td>

        </tr>
      `
    })
  } catch (error) {
    console.log("Error fetching data:");
  }
  }
  
  let Del=(id)=>{

let url = `http://localhost:3000/Hotel/${id}`

fetch(url,{method:"DELETE"})


  }


let Book=()=>{
    let Name = document.querySelector("#name").value
    let Age = document.querySelector("#age").value
    let Checking = document.querySelector("#checking").value
    let Checkout = document.querySelector("#checkout").value
    let City = document.querySelector("#city").value
    let Person = document.querySelector("#person").value

    let url = "http://localhost:3000/Hotel"

    fetch(url, {

      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Name: Name,
        Age: Age,
        Checking: Checking,
        Checkout: Checkout,
        City: City,
        Person: Person,
        Price:Price
      })
    })
    location.href="Crud.html"
    return false
  }

let Formopen= async (id)=>{

    let url = `http://localhost:3000/Hotel/${id}`

    let res =await fetch(url,{method:"GET"});
    let data =await res.json();

    console.log(data);

    let UpdateForm=document.querySelector("#Update")

    let formData=`
    Enter Name: <input type="text" id="upname" value="${data.Name}">
    Enter Age: <input type="text" id="upage" value="${data.Age}">
    Enter Checking:<input type="text" id="upcecking" value="${data.Checking}">
    Enter Checkout:<input type="text" id="upcheckout" value="${data.Checkout}">
    Select City: <select id="upcity">
            <option value="Bihar">Bihar</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Indor">Indor</option>
            <option value="Delhi">Delhi</option>
        </select><br><br>
         Enter Person: <input type="text" id="upperson" value="${data.Person}"><br><br>

        <input type="submit" value="Update Data" onclick="return update('${data.id}')">
    `
    UpdateForm.innerHTML=formData
}

let update=(id)=>{
  let url = `http://localhost:3000/Hotel/${id}`
  let upname = document.querySelector("#upname").value
  let upage = document.querySelector("#upage").value
  let upcecking = document.querySelector("#upcecking").value
  let upcheckout = document.querySelector("#upcheckout").value
  let upcity = document.querySelector("#upcity").value
  let upperson = document.querySelector("#upperson").value

  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Name:upname,
      Age:upage,
      Checking:upcecking,
      Checkout:upcheckout,
      City:upcity,
      Person:upperson,
      Price:500
        })
  })
  return false
}