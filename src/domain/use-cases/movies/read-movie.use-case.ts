import { MovieType, Id, Movie } from "../../../shared/types/movie";

import validateSchema from "../../utils/validate-schema";

type OutsideGetMovie = (id: number) => Promise<MovieType>;

type ReadMovieUseCase = (
  outsideGetMovie: OutsideGetMovie,
  id: number
) => Promise<MovieType>;

const validateInput = validateSchema(Id.parse);
const validateOutput = validateSchema(Movie.parse);

const readMovieUseCase: ReadMovieUseCase = async (outsideGetMovie, id) => {
  const requestData = validateInput(id);
  const responseData = await outsideGetMovie(requestData);
  return validateOutput(responseData);
};

export default readMovieUseCase;
