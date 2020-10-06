let year = document.getElementById("year").value;
let month = document.getElementById("month").value;
let day = document.getElementById("day").value;

let photo = `<img src="${data}"  alt="Foto dle dia"></img>`;

const MY_KEY = "6s2K2kFNsBC7h8Aga2lNNIFN4oQtXSohrMNurKNe";

let urlDate = `https://api.nasa.gov/planetary/apod?api_key=${MY_KEY}&${year}-${month}-${day}`;

/* let urlDate = `https://api.nasa.gov/planetary/apod?api_key=${MY_KEY}&date=2016-12-08`; */

function obtenerFecha() {
  /*   let photos = ` <div>${data.photos[0].img_src}- </div> `; */
  fetch(urlDate)
    .then(response => response.json())
    .then(data =>
     
      document.getElementById("personajes").innerHTML = photo;
      
      
    
    }
}
