import validateSchema from "../../utils/validate-schema";
import { MovieType, Movie } from "../../../shared/types/movie";

type OutsideUpdateMovie = (data: MovieType) => Promise<void>;

type UpdateMovieUseCase = (
  outsideUpdateMovie: OutsideUpdateMovie,
  data: MovieType
) => Promise<void>;

const validateInput = validateSchema(Movie.parse);

const updateMovieUseCase: UpdateMovieUseCase = (outsideUpdateMovie, data) => {
  return outsideUpdateMovie(validateInput(data));
};

export default updateMovieUseCase;
