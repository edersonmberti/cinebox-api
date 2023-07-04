import { CreateMovieType, CreateMovie } from "../../../shared/types/movie";

import validateSchema from "../../utils/validate-schema";

type OutsideCreateMovie = (data: CreateMovieType) => Promise<void>;

type CreateMovieUseCase = (
  outsideCreateMovie: OutsideCreateMovie,
  data: CreateMovieType
) => Promise<void>;

const validateCreateMovieSchema = validateSchema(CreateMovie.parse);

const createMovieUseCase: CreateMovieUseCase = (outsideCreateMovie, data) => {
  return outsideCreateMovie(validateCreateMovieSchema(data));
};

export default createMovieUseCase;
