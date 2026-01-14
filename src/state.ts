import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";
import type { Pokemon } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  pokeAPI: PokeAPI;
  nextLocationsURL: string | null;
  prevLocationsURL: string | null;
  caughtPokemon: Record<string, Pokemon>;
}

export function initState(): State{
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Pokedex > ",
});
  const commands = getCommands();
  const pokeAPI = new PokeAPI();
  return {
    readline: rl,
    commands,
    pokeAPI,
    nextLocationsURL: null,
    prevLocationsURL: null,
    caughtPokemon: {},
  };
}




