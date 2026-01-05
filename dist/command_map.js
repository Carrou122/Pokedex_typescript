export async function commandMap(state) {
    const url = state.nextLocationsURL ?? undefined;
    const locations = await state.pokeapi.fetchLocations(url);
    for (const location of locations.results) {
        console.log(location.name);
    }
    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;
}
