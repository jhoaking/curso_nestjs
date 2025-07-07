export const pokemonIds = [1, 20, 44, 50, 69];

pokemonIds.push(1);

export const charmander: Pokemon = {
  id: 1,
  name: "charmander",
};

interface Pokemon {
  id: number;
  name: string;
  age?: number;
}

export const pokemons: Pokemon[] = [];

pokemons.push(charmander);
