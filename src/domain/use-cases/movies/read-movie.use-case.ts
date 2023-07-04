import { MovieType, Id, Movie } from "../../../shared/types/movie";

import validateSchema from "../../utils/validate-schema";

type OutsideGetMovie = (id: number) => Promise<MovieType>;

type ReadMovieUseCase = (
  outsideGetMovie: OutsideGetMovie,
  id: number
) => Promise<MovieType>;

const validateReadMovieSchemaRequest = validateSchema(Id.parse);
const validateReadMovieSchemaResponse = validateSchema(Movie.parse);

const readMovieUseCase: ReadMovieUseCase = async (outsideGetMovie, id) => {
  return validateReadMovieSchemaResponse(
    await outsideGetMovie(validateReadMovieSchemaRequest(id))
  );
};

export default readMovieUseCase;
