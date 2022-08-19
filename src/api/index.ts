import type { AlbemState } from './albem/reducers'
import { albemReducers } from './albem/reducers'
import {combineReducers, ReducersMapObject} from "redux";

export type MycorizaState<T> = {
      albem: AlbemState
} & T

export function mycorizaMapObject<T>(reducers: ReducersMapObject<T>): ReducersMapObject<MycorizaState<T>> {
  return {
      albem: albemReducers,
...reducers
} as any
}

export function mycorizaState<T>(reducers: ReducersMapObject<T>) {
  return combineReducers<MycorizaState<T>>(mycorizaMapObject(reducers))
}
