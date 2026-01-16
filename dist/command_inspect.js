export async function commandInspect(state, ...args) {
    const name = args[0];
    if (!state.caughtPokemon[name]) {
        console.log("You have not caught that pokemon");
    }
    else {
        const pokemon = state.caughtPokemon[name];
        console.log(`Name: ${pokemon.name}`);
        console.log(`Height: ${pokemon.height}`);
        console.log(`Weight: ${pokemon.weight}`);
        console.log("Stats:");
        for (const stat of pokemon.stats) {
            console.log(` -${stat.stat.name}: ${stat.base_stat}`);
        }
        ;
        console.log("Types:");
        for (const type of pokemon.types) {
            console.log(` -${type.type.name}`);
        }
    }
}
