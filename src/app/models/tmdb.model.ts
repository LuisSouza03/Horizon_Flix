export interface ITmdbResponse {
  page: number;
  results: Array<ITmdbMovieData>;
  total_pages: number;
  total_results: number;
}

export interface ITmdbMovieData {
  poster_path?: string;
  adult?: boolean;
  overview: string;
  genre_ids?: string;
  id?: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  original_name?: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}

export interface ITmdbResponseTrailerMovie {
  id: number;
  results: Array<ITmdbMovieTrailerData>;
}

export interface ITmdbMovieTrailerData {
  iso_639_1?: string
  iso_3166_1?: string
  name?: string
  key?: string
  site: string
  size?: number
  type?: string
  official?: boolean
  published_at?: string
  id?: string
}
