import { MovieStoredType, MovieType, MoviesStoredType, MoviesType } from "../../../../shared/types/movie";

export function mapMovieStoredToMovie(movie: MovieStoredType): MovieType {
  return {
    id: movie.Id,
    name: movie.Name,
    description: movie.Description,
  };
}

export function mapMoviesStoredToMovies(movies: MoviesStoredType): MoviesType {
  return movies.map(mapMovieStoredToMovie)
}
