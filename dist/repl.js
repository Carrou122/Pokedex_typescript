import readline from "node:readline";
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
    rl.prompt();
    rl.on("line", (line) => {
        const words = cleanInput(line);
        if (words.length === 0) {
            rl.prompt();
            return;
        }
        console.log(`Your command was: ${words[0]}`);
        rl.prompt();
    });
}
