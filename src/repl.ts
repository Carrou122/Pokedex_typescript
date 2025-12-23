import readline from "node:readline";
import type { CLICommand } from "./command.js";
import { getCommands } from "./commands.js";

export function cleanInput(input: string): string[]{
  return input
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0);
 }

export function startREPL(): void{
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Pokedex > ",
});
  const commands = getCommands();
  console.log("Welcome to the Pokedex!");
  rl.prompt();
  rl.on("line", (line: string) => {
    const words = cleanInput(line)
    if (words.length === 0) {
      rl.prompt();
      return;
    }
    const commandName = words[0];
    const command = commands[commandName];
    if (command){
      command.callback(commands)
    } else {
      console.log("Unknown command");
    }
    rl.prompt();
  })
}
