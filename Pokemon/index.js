
let urlItem = 'https://pokeapi.co/api/v2/item?offset=20&limit=20';
let urlType = 'https://pokeapi.co/api/v2/type';
let urlPokemons = 'https://pokeapi.co/api/v2/pokemon';


let pokemon = "";
let tipoPokemon = "";


/* Listado de Pokemons */
/* fetch(urlItem)
  .then(response => response.json())
  .then(data => {
   for (let i = 0; i < data.results.length; i++) { 
      pokemon += `<p>${data.results[i].name}<div>`;   
    }
     document.getElementById("listado").innerHTML = pokemon;
  });
 */


/* Seleccionar tipo de Pokemon, y mostrar 3 pokemons aleatorios que sean de ese tipo */

fetch(urlType)
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.results.length; i++) { 
      tipoPokemon += `<option value="${data.results[i].name}">${data.results[i].name}</option>`;
    }
    let pokemonFiltro = `<select id="selector" onchange="capturaValor()">${tipoPokemon}</select>`;
    document.getElementById("filtro").innerHTML = pokemonFiltro; 
  });


function capturaValor() {
  let select = document.getElementById('selector');
  let selectedOption = select.options[select.selectedIndex];
  //console.log(selectedOption.value);

  fetch(urlPokemons)
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.results.length; i++) { 
      fetch(`https://pokeapi.co/api/v2/pokemo/${i}`)
        .then(response => response.json())
        .then(data => data.results.filter(elemento => elemento == selectedOption));
      console.log(elemento);
         }
     
    })
  }



 /*  for (let i = 0; i < data.result.length; index++) {
    const element = array[index]; */
    
  

  /* data.results.find(elemento => elemento.) */


  





  



 

