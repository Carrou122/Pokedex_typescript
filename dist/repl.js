import readline from "node:readline";
import { getCommands } from "./commands.js";
export function cleanInput(input) {
    return input
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .filter((w) => w.length > 0);
}
export function startREPL() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    const commands = getCommands();
    console.log("Welcome to the Pokedex!");
    rl.prompt();
    rl.on("line", (line) => {
        const words = cleanInput(line);
        if (words.length === 0) {
            rl.prompt();
            return;
        }
        const commandName = words[0];
        const command = commands[commandName];
        if (command) {
            command.callback(commands);
        }
        else {
            console.log("Unknown command");
        }
        rl.prompt();
    });
}
