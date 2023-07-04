import { Id } from "../../../shared/types/movie";

import validateSchema from "../../../shared/validate-schema";

type OutsideDeleteMovie = (id: number) => Promise<void>;

type DeleteMovieUseCase = (
  outsideDeleteMovie: OutsideDeleteMovie,
  id: number
) => Promise<void>;

const validateDeleteMovieSchema = validateSchema(Id.parse)

const deleteMovieUseCase: DeleteMovieUseCase = (outsideDeleteMovie, id) => {
  return outsideDeleteMovie(validateDeleteMovieSchema(id));
};

export default deleteMovieUseCase;
