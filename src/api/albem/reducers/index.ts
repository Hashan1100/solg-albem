
import {combineReducers, ReducersMapObject} from 'redux'
import { ArtistState, artistReducers } from './artist';

/**
 * @ignore
 */
export type AlbemState = {
      artist: ArtistState
}

/**
 * @ignore
 */
export const albemReducers = combineReducers<AlbemState>({
  artist: artistReducers
})

