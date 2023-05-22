import data from './data/pokemon/pokemon.js';
import filtrarTipos from './data.js';

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
          <div class="back tarjeta" >
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
/*console.log(despliegueBoton)
despliegueBoton.addEventListener('click', () => {
    //console.log('existe');
})*/
despliegueBoton.forEach((boton) => {
  const dropdownContent = document.getElementById(boton.dataset.target);
  //const opciones = dropdownContent.querySelectorAll('a');
  //boton.forEach((opcion) => {
const seleccion = boton.getAttribute('name');
boton.addEventListener('click', (event) => {
    event.preventDefault();
    //console.log(pokemon, seleccion);
    const filtrado = filtrarTipos(pokemon, seleccion);
    console.log(filtrado)
    contenedor.innerHTML = "";
    crearTarjetas(filtrado.pokemon);
      //button.textContent = opcion.textContent.toUpperCase();
    });
    /*opcion.textContent = opcion.textContent.toUpperCase();
  });
  //filtrarTipos(pokemon, dropdownContent)
  //console.log(filtrarTipos(pokemon, dropdownContent))
  //console.log(dropdownContent);*/
});

//const tipoPokemon = document.getElementsByClassName("tipoPokemon");