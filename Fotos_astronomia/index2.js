let year = document.getElementById("year").value;
let month = document.getElementById("month").value;
let day = document.getElementById("day").value;

const MY_KEY = "6s2K2kFNsBC7h8Aga2lNNIFN4oQtXSohrMNurKNe";
/* let urlDate = `https://api.nasa.gov/planetary/apod?api_key=${MY_KEY}&${year}-${month}-${day}`; */

let urlDate = `https://api.nasa.gov/planetary/apod?api_key=${MY_KEY}&date=2016-12-08`;

function obtenerFecha() {
  let infoPhoto = "  ";

  fetch(urlDate)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      /* console.log(data); */
      infoPhoto = `<h4>${data.title}</h4>
      <p>${data.date}</p>
      <img class="img-nasa" src="${data.url}" alt="Foto del dia"></img>
      <p>${data.explanation}</p>`;

      document.getElementById("photos").innerHTML = infoPhoto;
    });
}

obtenerFecha();
