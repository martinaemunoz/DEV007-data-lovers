/*import { tarjetas } from './data.js';*/
import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';

console.log(data.pokemon);


const contenedor = document.getElementById('contenedor');
data.pokemon.forEach(pokemones =>{
    contenedor.innerHTML += `
    <div  class="tarjeta">
    <h2>${pokemones.name}</h2>
    <h2>${pokemones.num}</h2>
    </div>



    `


})



console.log()
