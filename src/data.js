// estas funciones son de ejemplo

export const filtrarTipos = (data, tipo) => {
  const dataFiltrada = data.filter((pokemon) =>
    pokemon.type.includes(tipo)
  );
  return { pokemon: dataFiltrada };
};


   
 export function array(data, orden) {
  const copiedData = [...data.pokemon]; // Crear una copia del array original

  if (orden === "AZ") {
    copiedData.sort((a, b) => a.name.localeCompare(b.name)); // Orden ascendente (de A a Z)
  } else if (orden === "ZA") {
    copiedData.sort((a, b) => b.name.localeCompare(a.name)); // Orden descendente (de Z a A)
  }

  return copiedData;
}