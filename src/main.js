import data from './data/pokemon/pokemon.js';
import { filtrarTipos, ordenarPokemon, buscarPorNombre } from './data.js';

const pokemon = data.pokemon;
const contenedor = document.getElementById('contenedor');
function crearTarjetas(data){
  data.forEach(pokemon =>{
    contenedor.innerHTML += `
        <div class="card">
          <div class="front tarjeta">
          <img class="imagenPokemon" src=${pokemon.img}>
          <h2>#${pokemon.num}<br>${pokemon.name.toUpperCase()}</h2>
        </div>
          <div class="back tarjeta">
              <p> Ataque:<br> ${pokemon.stats["base-attack"]}
              <br>Defensa:<br> ${pokemon.stats["base-defense"]} 
              <br>Resistencia:<br> ${pokemon.stats["base-stamina"]} 
              <br>Max-cp:<br> ${pokemon.stats["max-cp"]}
              <br>Max-hp:<br> ${pokemon.stats["max-hp"]}</p>
          </div>
        </div>`
  })
}


crearTarjetas(pokemon);

const despliegueBoton = document.querySelectorAll('.tipoPokemon');
despliegueBoton.forEach((boton) => {
  const seleccion = boton.getAttribute('name');
  boton.addEventListener('click', (event) => {
    event.preventDefault();
    if (boton.name === "todos") {
      contenedor.innerHTML = "";
    } else {
      const filtrado = filtrarTipos(pokemon, seleccion);
      contenedor.innerHTML = "";
      crearTarjetas(filtrado.pokemon);
    }
  });
});
//const tipoPokemon = document.getElementsByClassName("tipoPokemon");


const Ordenar = document.getElementsByClassName("Ordenar")

for (const item of Ordenar) {
  item.addEventListener("click", () => {
    if (item.name === "todos") {
      contenedor.innerHTML = "";
      crearTarjetas(pokemon);
    }
    if (item.name === "AZ") {
      const SortData = ordenarPokemon(data, item.name);
      contenedor.innerHTML = "";
      crearTarjetas(SortData);
    } else if (item.name === "ZA") {
      const SortData = ordenarPokemon(data, item.name);
      contenedor.innerHTML = "";
      crearTarjetas(SortData);
    }
  });
}

const inputBuscar = document.getElementById("inputBuscar");
inputBuscar.addEventListener("input", function () {
  const nombreBuscar = inputBuscar.value.trim().substring(0, 3);
  const filtroNombre = buscarPorNombre(pokemon, nombreBuscar);
  
  if (filtroNombre.pokemon.length === 0) {
    alert("No se encontraron resultados");
  }
  
  contenedor.innerHTML ="";
  crearTarjetas(filtroNombre.pokemon);
});



const arrayTypes = [
  "psychic",
  "ground",
  "water",
  "fighting",
  "normal",
  "ghost",
  "grass",
  "poison",
  "flying",
  "dark",
  "fairy",
  "dragon",
  "rock",
  "steel",
  "ice",
  "electric",
];
const arrayTotalTypes =[];
console.log(arrayTotalTypes)
for (let i = 0; i < arrayTypes.length; i++) {
  arrayTotalTypes.push({
    type: arrayTypes[i],
    total: filtrarTipos(pokemon, arrayTypes[i]).pokemon.length / 100,
  });
}


const toggleTableBtn = document.getElementById("toggle-table-btn");
const myTable = document.getElementById("my-table");

toggleTableBtn.addEventListener("click", () => {
  myTable.classList.toggle("hidden");
 

  const table = document.getElementById("tablaDatos");
  table.innerHTML = "";
  for (let i = 0; i < arrayTotalTypes.length; i++) {
    const row = document.createElement("tr");
    const coldName = document.createElement("td");
    coldName.textContent = arrayTotalTypes[i].type;
    row.appendChild(coldName);
    const colTotal = document.createElement("td");
    colTotal.textContent = arrayTotalTypes[i].total;
    row.appendChild(colTotal);

    table.appendChild(row);
  }
});
