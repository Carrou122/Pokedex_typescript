export async function commandExplore(state, ...args) {
    const areaName = args[0];
    if (!areaName) {
        console.log("No area provided");
        return;
    }
    console.log(`Exploring ${areaName}...`);
    const pokemonNames = await state.pokeapi.fetchPokemon(areaName);
    console.log("Found Pokemon:");
    for (const name of pokemonNames) {
        console.log(` - ${name}`);
    }
}
