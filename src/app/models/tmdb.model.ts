export interface ITmdbResponse {
  page: number;
  results: Array<ITmdbMovieDataTrending>;
  total_pages: number;
  total_results: number;
}

export interface ITmdbMovieDataTrending {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  genre_ids: string;
  id: number;
  original_title: string;
  original_language: string;
  title?: string;
  original_name?: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}
