import { Id } from "../../../shared/types/movie";

import validateSchema from "../../utils/validate-schema";

type OutsideDeleteMovie = (id: number) => Promise<void>;

type DeleteMovieUseCase = (
  outsideDeleteMovie: OutsideDeleteMovie,
  id: number
) => Promise<void>;

const validateInput = validateSchema(Id.parse);

const deleteMovieUseCase: DeleteMovieUseCase = (outsideDeleteMovie, id) => {
  return outsideDeleteMovie(validateInput(id));
};

export default deleteMovieUseCase;
