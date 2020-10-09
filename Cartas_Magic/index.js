const URL_PATH = `https://api.magicthegathering.io/v1`;

const URLSETS = `${URL_PATH}/sets`;
const URLTYPES = `${URL_PATH}/types`;
const URLCARDS = `${URL_PATH}/cards`;


let type = "";
let types = "";
let card = "";
let i;


fetch(URLTYPES)
  .then(response => response.json())
  .then(data => {
      for (let i = 1; i <= data.types.length; i++) { 
      type += `<option value="${[i]}">${data.types[i]}</option>`;
    }

      types += `
        <select onchange="irTematica()">
        <option value="${[i]}">${type}</option>
        </select>
      `;
    document.getElementById("selector").innerHTML = types;
  });




function irTematica() {
  fetch(URLCARDS)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.cards.length; i++) {
        console.log(data.cards[i].name)
        
        card += `
        <h4>${data.cards[i].name}</h4>
        <p>${data.cards[i].originalText}</p>
        <img src="${data.cards[i].imageUrl}" alt="carta">`
      }
     document.getElementById("cartas").innerHTML = card; 
    });
}

