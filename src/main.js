import data from './data/pokemon/pokemon.js';

/*console.log(data.pokemon);*/


const contenedor = document.getElementById('contenedor');
data.pokemon.forEach(pokemon =>{
  contenedor.innerHTML += `
  <div class="card">
    <div class="front tarjeta">
    
    <h2>#${pokemon.num}<br>${pokemon.name.toUpperCase()}</h2>
    <img class="imagenPokemon" src=${pokemon.img}>
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
