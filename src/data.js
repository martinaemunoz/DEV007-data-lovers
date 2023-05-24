// estas funciones son de ejemplo

export const filtrarTipos = (data, tipo) => {
  const dataFiltrada = data.filter((pokemon) =>
    pokemon.type.includes(tipo)
  );
  return { pokemon: dataFiltrada };
};

export function ordenarPokemon (data, order) {
  const orderedPokemon = data.sort(function(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (order === "AZ") {
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
    } else if (order === "ZA") {
      if (nameA > nameB) return -1;
      if (nameA < nameB) return 1;
    }
    return 0;
  });
}

