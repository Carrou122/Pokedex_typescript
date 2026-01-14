import { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]){
  const areaName = args[0];
  if (!areaName){
    console.log("No area provided");
    return;
    }
    console.log(`Exploring ${areaName}...`);
  const pokemonNames = await state.pokeAPI.fetchLocationPokemon(areaName);
  console.log("Found Pokemon:");
  for (const name of pokemonNames){
    console.log(` - ${name}`);
  }
}
