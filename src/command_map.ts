import type { State } from "./state.js";

export async function commandMap(state: State){
  const url = state.nextLocationsURL ?? undefined;
  const locations = await state.pokeAPI.fetchLocations(url);
  for (const location of locations.results){
    console.log(location.name);
  }
  state.nextLocationsURL = locations.next;
  state.prevLocationsURL = locations.previous;
}
