// estas funciones son de ejemplo

export const tarjetas = (data) => {
  let tarjetaString = "";
  for (const pokemon of data.pokemon) {
    tarjetaString += `
    <div class="card">
      <div class="front tarjeta">
        <img class="imagenPokemon" src=${pokemon.img} >
        <p>#${pokemon.num}<br>${pokemon.name.toUpperCase()}</p> 
    </div> 
     <div class="back tarjeta" >
        <p> Ataque:<br> ${pokemon.stats["base-attack"]}
        <br>Defensa:<br> ${pokemon.stats["base-defense"]} 
        <br>Resisencia:<br> ${pokemon.stats["base-stamina"]} 
        <br>Max-cp:<br> ${pokemon.stats["max-cp"]}
        <br>Max-hp:<br> ${pokemon.stats["max-hp"]}</p>
      </div>
    </div>`;
    console.log(tarjetaString)
  }
}
  return tarjetaString;

