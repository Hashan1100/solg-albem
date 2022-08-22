import type { AlbumState } from './albem/reducers'
import { albumReducers } from './albem/reducers'
import {combineReducers, ReducersMapObject} from "redux";

export type MycorizaState<T> = {
      album: AlbumState
} & T

export function mycorizaMapObject<T>(reducers: ReducersMapObject<T>): ReducersMapObject<MycorizaState<T>> {
  return {
      album: albumReducers,
      ...reducers
} as any
}

export function mycorizaState<T>(reducers: ReducersMapObject<T>) {
  return combineReducers<MycorizaState<T>>(mycorizaMapObject(reducers))
}
