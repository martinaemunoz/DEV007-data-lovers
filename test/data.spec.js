import { filtrarTipos, ordenarPokemon } from '../src/data.js';

const data = {
  pokemon: [
    {
      num: "002",
      name: "ivysaur",
      img: "https://www.serebii.net/pokemongo/pokemon/002.png",
      type: ["grass", "poison"],
      stats: {
        "base-attack": "151",
        "base-defense": "143",
        "base-stamina": "155",
        "max-cp": "1699",
        "max-hp": "134"
      },
    },
    {
      num: "003",
      name: "venusaur",
      img: "https://www.serebii.net/pokemongo/pokemon/003.png",
      type: ["grass", "poison"],
      stats: {
        "base-attack": "198",
        "base-defense": "189",
        "base-stamina": "190",
        "max-cp": "2720",
        "max-hp": "162"
      },
    },
    {
      num: "004",
      name: "charmander",
      img: "https://www.serebii.net/pokemongo/pokemon/004.png",
      type: ["fire"],
      stats: {
        "base-attack": "116",
        "base-defense": "93",
        "base-stamina": "118",
        "max-cp": "980",
        "max-hp": "105"
      },
    },
    {
      num: "005",
      name: "charmeleon",
      img: "https://www.serebii.net/pokemongo/pokemon/005.png",
      type: ["fire"],
      stats: {
        "base-attack": "158",
        "base-defense": "126",
        "base-stamina": "151",
        "max-cp": "1653",
        "max-hp": "131"
      },
    },
    {
      num: "006",
      name: "charizard",
      img: "https://www.serebii.net/pokemongo/pokemon/006.png",
      type: ["fire", "flying"],
      stats: {
        "base-attack": "223",
        "base-defense": "173",
        "base-stamina": "186",
        "max-cp": "2889",
        "max-hp": "158"
      },
    },
  ],
};


describe('filtrarTipos', () => {
  test('Debería ser una función.', () => {
    expect(typeof filtrarTipos).toBe('function');
  })

  it('Filtra y devuelve a un tipo como objeto.', () => {
    expect(typeof filtrarTipos(data.pokemon, "grass")).toBe("object");
  })
});

describe('ordenarPokemon', () => {
  test('Debería ser una función.', () => {
    expect(typeof ordenarPokemon).toBe('function');
  })

  it('ordenarPokemon devuelve un objeto.', () => {
    expect(typeof ordenarPokemon(data)).toBe("object");
  })
})

describe('buscarPorNombre', () => {
  test('Debería ser una función.', () => {
    expect(typeof buscarPorNombre).toBe('function');
  })

  it('buscarPorNombre devuelve un objeto a partir de una letra.', () => {
    expect(typeof buscarPorNombre(data.pokemon, "c")).toBe("object");
  })
})
