import { MovieType, MoviesType } from "../../../../shared/types/movie";
import { MovieStored, MoviesStored } from "../types";

export function mapMovieStoredToMovie(movie: MovieStored): MovieType {
  return {
    id: movie.Id,
    name: movie.Name,
    description: movie.Description,
  };
}

export function mapMoviesStoredToMovies(movies: MoviesStored): MoviesType {
  return movies.map(mapMovieStoredToMovie);
}
