
import React, { useEffect, useState } from 'react'
import * as UsesCases from '../../core/use-cases'
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import { MovieDetail } from '../../core/entities/movie.entity';
import { Cast } from '../../core/entities/cast.entity';

const useMovie = ( movieId: number ) => {

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<MovieDetail>();
  const [cast, setCast] = useState<Cast[]>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);

    const moviePromise = await UsesCases.getMovieById(movieDBFetcher, movieId);
    const castPromise = await UsesCases.getMovieCastUseCase(movieDBFetcher, movieId);

    const [movie, cast] = await Promise.all([moviePromise, castPromise]);

    setMovie(movie);
    setCast(cast);
    setIsLoading(false);
  }

  return {
    isLoading,
    movie,
    cast
  }
}

export default useMovie