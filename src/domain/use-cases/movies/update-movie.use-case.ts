import validateSchema from "../../../shared/validate-schema";
import { MovieType, Movie } from "../../../shared/types/movie";

type OutsideUpdateMovie = (data: MovieType) => Promise<void>;

type UpdateMovieUseCase = (
  outsideUpdateMovie: OutsideUpdateMovie,
  data: MovieType
) => Promise<void>;

const validateUpdateMovieSchema = validateSchema(Movie.parse)

const updateMovieUseCase: UpdateMovieUseCase = (outsideUpdateMovie, data) => {
  return outsideUpdateMovie(validateUpdateMovieSchema(data));
};

export default updateMovieUseCase;
