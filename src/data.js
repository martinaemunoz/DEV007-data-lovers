// estas funciones son de ejemplo

const filtrarTipos = (data, tipo) => {
  const dataFiltrada = data.filter((pokemon) =>
    pokemon.type.includes(tipo)
  );
  return { pokemon: dataFiltrada };
};

export default filtrarTipos;