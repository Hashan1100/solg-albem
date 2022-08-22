
import {combineReducers} from 'redux'
import { ArtistState, artistReducers } from './artist';

/**
 * @ignore
 */
export type AlbumState = {
      artist: ArtistState
}

/**
 * @ignore
 */
export const albumReducers = combineReducers<AlbumState>({
  artist: artistReducers
})

