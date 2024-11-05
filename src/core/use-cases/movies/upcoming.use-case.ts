import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MoviesDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import type { Movie } from "../../entities/movie.entity";

import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";

export const moviesUpcomingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<MoviesDBMoviesResponse>('/upcoming');
    // console.log({nowPlaying});
    return upcoming.results.map( MovieMapper.fromMovieDBResultToEntity );
    
  } catch (error) {
    console.error('Error log:', error);
    throw error;
  }
}
