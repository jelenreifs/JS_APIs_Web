let url = `https://randomuser.me/api/`;
let usuario = "";

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    for (let i = 0; i < data.results.length; i++) {
      usuario = `
        <div>
          <h4>${data.results[i].name.first} ${data.results[i].last}</h4>
           <p>${data.results[i].email}</p>
            <img src=${data.results[i].picture.medium} alt="user" />
            <p>Street: ${data.results[i].location.street}</p>
            <p>City: ${data.results[i].location.city}</p>
            <p>State: ${data.results[i].location.state}</p>
            <p>Country: ${data.results[i].location.country}</p>
            <p>Postcode: ${data.results[i].location.postcode}</p>
        </div>
      `;
    }
    document.getElementById("app").innerHTML = usuario;
  });
