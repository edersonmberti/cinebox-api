import { CreateMovieType, CreateMovie } from "../../../shared/types/movie";

import validateSchema from "../../utils/validate-schema";

type OutsideCreateMovie = (data: CreateMovieType) => Promise<void>;

type CreateMovieUseCase = (
  outsideCreateMovie: OutsideCreateMovie,
  data: CreateMovieType
) => Promise<void>;

const validateInput = validateSchema(CreateMovie.parse);

const createMovieUseCase: CreateMovieUseCase = (outsideCreateMovie, data) => {
  return outsideCreateMovie(validateInput(data));
};

export default createMovieUseCase;
