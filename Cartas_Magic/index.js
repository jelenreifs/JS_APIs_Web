const URL_PATH = `https://api.magicthegathering.io/v1`;

const URLSETS = `${URL_PATH}/sets`;
const URLTYPES = `${URL_PATH}/types`;
const URLCARDS = `${URL_PATH}/cards`;


let type = "";
let types = "";
let card = "";
let i;

let resultado;



fetch(URLTYPES)
  .then(response => response.json())
  .then(data => {
      for (let i = 1; i <= data.types.length; i++) { 
      type += `<option value="${data.types[i]}">${data.types[i]}</option>`;
    }

      types += `
        <select id="selector" onchange="capturaValor()">${type}</select>
      `;
    document.getElementById("filtro").innerHTML = types;
  });


function capturaValor() {
  let select = document.getElementById('selector');
  let selectedOption = select.options[select.selectedIndex].value;
  console.log(selectedOption);

  fetch(URLCARDS)
    .then(response => response.json())
    //.then(data => resultado = data.cards.filter(elemento => elemento.type == selectedOption))
    .then(data => {
      resultado = data.cards.filter(elemento => elemento.types == selectedOption)
      console.log(resultado);


      card += `<h4>${resultado.cards.name}</h4>
        <p>${resultado.cards.text}</p>
        <img src="${resultado.cards.imageUrl}" alt="imagen">
        `;
     
    })
     document.getElementById("cartas").innerHTML = card;


    }
   
    

