import { MovieType, Id, Movie } from "../../../shared/types/movie";

import validateSchema from "../../../shared/validate-schema";

type OutsideGetMovie = (id: number) => Promise<MovieType>;

type ReadMovieUseCase = (
  outsideGetMovie: OutsideGetMovie,
  id: number
) => Promise<MovieType>;

const validadeReadMovieSchemaRequest = validateSchema(Id.parse);
const validadeReadMovieSchemaResponse = validateSchema(Movie.parse);

const readMovieUseCase: ReadMovieUseCase = async (outsideGetMovie, id) => {
  return validadeReadMovieSchemaResponse(
    await outsideGetMovie(validadeReadMovieSchemaRequest(id))
  );
};

export default readMovieUseCase;
