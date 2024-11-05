import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MoviesDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import type { Movie } from "../../entities/movie.entity";

import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";

export const moviesTopRatedUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<MoviesDBMoviesResponse>('/top_rated');
    // console.log({nowPlaying});
    return topRated.results.map( MovieMapper.fromMovieDBResultToEntity );
    
  } catch (error) {
    console.error('Error log:', error);
    throw error;
  }
}
