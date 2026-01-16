import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import type { State, CLICommand } from "./state.js";
import { commandMap } from "./command_map.js";
import { commandMapBack } from "./command_mapb.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";

export function getCommands(): Record<string, CLICommand>{
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Displays the next 20 location areas",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Displays the previous 20 location areas",
      callback: commandMapBack,
    },
    explore: {
      name: "explore",
      description: "Displays nearby pokemons",
      callback: commandExplore,
    },
    catch: {
      name: "catch",
      description: "Catching a pokemon",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "Inspecting a pokemon",
      callback: commandInspect,
    }
  };
}
