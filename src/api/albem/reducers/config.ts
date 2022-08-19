
/**
 * @ignore
 */
export function baseUrl() {
  return process.env.API_URL ?? (!process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'http://ws.audioscrobbler.com/2.0/' : 'http://ws.audioscrobbler.com/2.0/')
}
