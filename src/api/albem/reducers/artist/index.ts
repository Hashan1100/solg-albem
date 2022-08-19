
/**
 * @ignore
 */
import {NetworkStateFamily, networkStateReducer} from "mycoriza-runtime";
import {combineReducers} from "redux";
import {Pokedex} from "../../models/Artist";

/**
 * @ignore
 */
export interface ArtistState {
  useFindArtistByName: NetworkStateFamily<Pokedex>
}

/**
 * @ignore
 * Combined reducer for the Artist scope
 *
 * Following scopes are available. Related hooks are available alongside the reducers.
 */
export const artistReducers = combineReducers<ArtistState>({
    useFindArtistByName: networkStateReducer<Pokedex>("@mycoriza/artist/artistInfo")
})
