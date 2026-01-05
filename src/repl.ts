import readline from "node:readline";
import type { CLICommand, State } from "./state.js";
import { initState } from "./state.js";
import { getCommands } from "./commands.js";

export function cleanInput(input: string): string[]{
  return input
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0);
 }

export function startREPL(state: State): void{
  console.log("Welcome to the Pokedex!");
  state.readline.prompt();
  state.readline.on("line", async (line: string) => {
    const words = cleanInput(line)
    if (words.length === 0) {
      state.readline.prompt();
      return;
    }
    const commandName = words[0];
    const command = state.commands[commandName];
    if (command){
      try {
      await command.callback(state);
      } catch (err){
        console.log("Error:", (err as Error).message);
      }
    } else {
      console.log("Unknown command");
    }
    state.readline.prompt();
  })
}
