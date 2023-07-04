import { MoviesType, Movies } from "../../../shared/types/movie";
import validateSchema from "../../utils/validate-schema";

type OutsideGetMovies = () => Promise<MoviesType>;

type ReadMoviesUseCase = (
  outsideGetMovies: OutsideGetMovies
) => Promise<MoviesType>;

const validateReadMoviesSchemaResponse = validateSchema(Movies.parse);

const readMoviesUseCase: ReadMoviesUseCase = async (outsideGetMovies) => {
  return validateReadMoviesSchemaResponse(await outsideGetMovies());
};

export default readMoviesUseCase;
