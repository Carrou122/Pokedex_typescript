export async function commandPokedex(state) {
    console.log("Your Pokedex:");
    for (const pokemon of Object.keys(state.caughtPokemon)) {
        console.log(` -${pokemon}`);
    }
    ;
}
;
