let base = `https://pokeapi.co/api/v2`;

let url = `https://pokeapi.co/api/v2/type/`;

let pokemons = [];
let results = [];

fetch(url).then(response => response.json()).then(data => {
  pokemons = `<div>${data.results.type}<div>`;
  document.getElementById("app").innerHTML = pokemons;
});
