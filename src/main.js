/*import { tarjetas } from './data.js';*/

import data from './data/pokemon/pokemon.js';

console.log(data.pokemon);


const contenedor = document.getElementById('contenedor');
data.pokemon.forEach(pokemon =>{
    contenedor.innerHTML += `
    <div  class="tarjeta">
    <h2>${pokemon.name}</h2>
    <h2>${pokemon.num}</h2>
    <img src="${pokemon.img}" alt="${pokemon.name}">
    </div>



    `


})



console.log()
