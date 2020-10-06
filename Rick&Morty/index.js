let url = `https://rickandmortyapi.com/api/character/ `;

let personajes = "";

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    /* console.log(data); */

    for (let i = 0; i < data.results.length; i++) {
      personajes += `<div>
      <h4>${data.results[i].name}</h4>
      <img src=${data.results[i].image} alt="personajes" />
        </div>
      `;
    }
    document.getElementById("app").innerHTML = personajes;
  });
