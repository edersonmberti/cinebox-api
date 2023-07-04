import createMovieUseCase from "./create-movie.use-case";
import deleteMovieUseCase from "./delete-movie.use-case";
import updateMovieUseCase from "./update-movie.use-case";
import readMoviesUseCase from "./read-movies.use-case";
import readMovieUseCase from "./read-movie.use-case";

export default {
  createMovie: createMovieUseCase,
  deleteMovie: deleteMovieUseCase,
  updateMovie: updateMovieUseCase,
  readMovies: readMoviesUseCase,
  readMovie: readMovieUseCase,
};
