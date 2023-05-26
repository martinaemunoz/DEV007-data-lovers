import data from './data/pokemon/pokemon.js';
import { filtrarTipos, ordenarPokemon, buscarPorNombre} from './data.js';

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
/*console.log(data.pokemon);*/

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