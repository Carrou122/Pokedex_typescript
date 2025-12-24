export function cleanInput(input) {
    return input
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .filter((w) => w.length > 0);
}
export function startREPL(state) {
    console.log("Welcome to the Pokedex!");
    state.readline.prompt();
    state.readline.on("line", (line) => {
        const words = cleanInput(line);
        if (words.length === 0) {
            state.readline.prompt();
            return;
        }
        const commandName = words[0];
        const command = state.commands[commandName];
        if (command) {
            command.callback(state);
        }
        else {
            console.log("Unknown command");
        }
        state.readline.prompt();
    });
}
