import data from './data/pokemon/pokemon.js';
import { filtrarTipos, array } from './data.js';

const pokemon = data.pokemon;
let contenedor = document.getElementById('contenedor');
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
/*console.log(data.pokemon);*/

crearTarjetas(pokemon);

const despliegueBoton = document.querySelectorAll('.tipoPokemon');
despliegueBoton.forEach((boton) => {
const dropdownContent = document.getElementById(boton.dataset.target);

const seleccion = boton.getAttribute('name');
boton.addEventListener('click', (event) => {
    event.preventDefault();
    if (boton.name === "todos") {
        contenedor.innerHTML = "";
        crearTarjetas(pokemon);
    } else {
    const filtrado = filtrarTipos(pokemon, seleccion);
    console.log(filtrado);
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
      const SortData = array (data, item.name);
      contenedor.innerHTML = "";
      crearTarjetas(SortData);
    } else if (item.name === "ZA") {
      const SortData = array(data, item.name);
      contenedor.innerHTML = "";
      crearTarjetas(SortData);
    }
  });
}

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
const arrayTotalTypes = [];
 arrayTypes.forEach((type) => {
  arrayTotalTypes.push({
    type: type,
    total: filtrarTipos(data, arrayTypes[index]).pokemon.length / 100,
  });
 });