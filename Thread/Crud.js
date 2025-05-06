let fetchData = async () => {
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
  }
  
  let Del=(id)=>{

let url = `http://localhost:3000/Hotel/${id}`

fetch(url,{method:"DELETE"})


  }
fetchData();
