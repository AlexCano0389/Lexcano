var contenido = document.querySelector("#contenido");

function ejecutarTareasPrueba() {
  traerNave();
  traerPeliculas();
  traerInfoPlanetas();
}


let traerNave = () => {
    let array = ["name","model","manufacturer","passengers"];
  fetch("https://swapi.dev/api/starships")
    .then((res) => res.json())
    .then((data) => {
      let naveMasPas = maxPas(data.results);
      for (let propiedades of array) {
        console.log(naveMasPas[propiedades]);
      }
    });
};
let maxPas = (naves) => {
  let pasajerosResult = 0.0;
  let naveResult;
  for (let nave of naves) {
    if (!isNaN(parseFloat(nave.passengers))) {
      if (parseFloat(nave.passengers) > pasajerosResult) {
        pasajerosResult = nave.passengers;
        naveResult = nave;
      }
    }
  }
  return naveResult;
};

let traerPeliculas = () => {
    fetch("https://swapi.dev/api/films")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results["0"].title);
      console.log(data.results["1"].title);
      console.log(data.results["2"].title);
      console.log(data.results["3"].title);
      console.log(data.results["4"].title);
      console.log(data.results["5"].title);
    });
};

function traerInfoPlanetas() {
  fetch("https://swapi.dev/api/planets")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results["0"].name);
      console.log(data.results["1"].name);
      console.log(data.results["2"].name);
      console.log(data.results["3"].name);
      console.log(data.results["4"].name);
      console.log(data.results["5"].name);
      console.log(data.results["6"].name);
      console.log(data.results["7"].name);
      console.log(data.results["8"].name);
      console.log(data.results["9"].name);
      console.log(data.results["0"].terrain);
      console.log(data.results["1"].terrain);
      console.log(data.results["2"].terrain);
      console.log(data.results["3"].terrain);
      console.log(data.results["4"].terrain);
      console.log(data.results["5"].terrain);
      console.log(data.results["6"].terrain);
      console.log(data.results["7"].terrain);
      console.log(data.results["8"].terrain);
      console.log(data.results["9"].terrain);
      console.log(data.results["0"].gravity);
      console.log(data.results["1"].gravity);
      console.log(data.results["2"].gravity);
      console.log(data.results["3"].gravity);
      console.log(data.results["4"].gravity);
      console.log(data.results["5"].gravity);
      console.log(data.results["6"].gravity);
      console.log(data.results["7"].gravity);
      console.log(data.results["8"].gravity);
      console.log(data.results["9"].gravity);
      console.log(data.results["0"].diameter);
      console.log(data.results["1"].diameter);
      console.log(data.results["2"].diameter);
      console.log(data.results["3"].diameter);
      console.log(data.results["4"].diameter);
      console.log(data.results["5"].diameter);
      console.log(data.results["6"].diameter);
      console.log(data.results["7"].diameter);
      console.log(data.results["8"].diameter);
      console.log(data.results["9"].diameter);
      console.log(data.results["0"].population);
      console.log(data.results["1"].population);
      console.log(data.results["2"].population);
      console.log(data.results["3"].population);
      console.log(data.results["4"].population);
      console.log(data.results["5"].population);
      console.log(data.results["6"].population);
      console.log(data.results["7"].population);
      console.log(data.results["8"].population);
      console.log(data.results["9"].population);
    });
  
}
