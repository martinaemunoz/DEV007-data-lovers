// esta función es para filtar

export function filtrarTipos(data, tipo) {
  const dataFiltrada = data.filter((pokemon) =>
  
    pokemon.type.includes(tipo)
  );
  return { pokemon: dataFiltrada };
}


// esta función es para ordenar
export function ordenarPokemon(data, orden) {
  const copiedData = [...data.pokemon]; // Crear una copia del array original

  if (orden === "AZ") {
    copiedData.sort((a, b) => a.name.localeCompare(b.name)); // Orden ascendente (de A a Z)
  } else if (orden === "ZA") {
    copiedData.sort((a, b) => b.name.localeCompare(a.name)); // Orden descendente (de Z a A)
  }

  return copiedData;
}

// Esta función sirve para buscar pokemon por su nombre 
export function buscarPorNombre(data, nombreBuscar) {
  const withoutSpaces = nombreBuscar.trim();
  const dataFiltrada = data.filter((pokemon) => 
    pokemon.name.startsWith(withoutSpaces))
  return { pokemon: dataFiltrada };
}