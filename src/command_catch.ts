import { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]){
  const pokemonName = args[0];
  console.log(`Throwing a Pokeball at ${pokemonName}...`);
  const pokemon = await state.pokeAPI.fetchPokemon(pokemonName);
  const catchChance = 1/ (1 + pokemon.base_experience / 100);
  const roll = Math.random();
  if (roll < catchChance){
    state.caughtPokemon[pokemon.name] = pokemon;
    console.log(`${pokemonName} was caught!`);
  } else {
    console.log(`${pokemonName} escaped!`);
  }
}
