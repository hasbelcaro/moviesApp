import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MoviesDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import type { Movie } from "../../entities/movie.entity";

import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";

interface Options {
  page?: number;
  limit?: number;
}

export const moviesPopularUseCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {
  try {

    const popular = await fetcher.get<MoviesDBMoviesResponse>('/popular', {
      params: {
        page: options?.page || 1
      }
    });
    // console.log({nowPlaying});
    return popular.results.map( MovieMapper.fromMovieDBResultToEntity );
    
  } catch (error) {
    console.error('Error log:', error);
    throw error;
  }
}
