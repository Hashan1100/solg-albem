export type Pokedex = {
  results: Results;
}

export type Results = {
  "opensearch:Query":        OpensearchQuery;
  "opensearch:totalResults": string;
  "opensearch:startIndex":   string;
  "opensearch:itemsPerPage": string;
  artistmatches:             Artistmatches;
  "@attr":                   Attr;
}

export type Attr = {
  for: string;
}

export type Artistmatches = {
  artist: Artist[];
}

export type Artist = {
  name:       string;
  listeners:  string;
  mbid:       string;
  url:        string;
  streamable: string;
  image:      Image[];
}

export type Image = {
  "#text": string;
  size:    Size;
}

export enum Size {
  Extralarge = "extralarge",
  Large = "large",
  Medium = "medium",
  Mega = "mega",
  Small = "small",
}

export type OpensearchQuery = {
  "#text":     string;
  role:        string;
  searchTerms: string;
  startPage:   string;
}
