
/**
 * @module Artist
 */
import { NetworkStateFamily, MycorizaHookResultType, GET, reset, resolveFamily } from "mycoriza-runtime";
import {useDispatch, useSelector} from "react-redux";
import {MycorizaState} from "../../../index";
import {baseUrl} from '../config'
import {Pokedex} from "../../models/Artist";

/**
 * @ignore
 */
const domain = "@mycoriza/artist/artistInfo"

export type FindArtistByName_Params = {
  artist?: string
  apiKey: string
}

/**
 * Multiple status values can be provided with comma separated strings
 *
 * ```
 * @param entityKey Unique key it isolate each response.
 */
export function useFindArtistByName(entityKey: string = "default"):
  MycorizaHookResultType<Pokedex, (params: FindArtistByName_Params) => void> {
  let dispatch = useDispatch();

  function execute(params: FindArtistByName_Params) {
  let parameters = {
    query: {
      ...(params['artist'] ? { 'artist': params['artist'], "api_key": params['apiKey'], 'method': "artist.search", "format": "json" } : {}),
},
}

    dispatch(GET(domain, entityKey, `${baseUrl()}`, parameters))
    }

    return [
        resolveFamily(entityKey, useSelector<MycorizaState<any>, NetworkStateFamily<Pokedex>>(state => state.album)),
        execute,
        () => dispatch(reset(domain, entityKey))
    ]
}
