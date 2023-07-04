import { MoviesType, Movies } from "../../../shared/types/movie";
import validateSchema from "../../../shared/validate-schema";

type OutsideGetMovies = () => Promise<MoviesType>;

type ReadMoviesUseCase = (
  outsideGetMovies: OutsideGetMovies
) => Promise<MoviesType>;

const validadeReadMoviesSchemaResponse = validateSchema(Movies.parse);

const readMoviesUseCase: ReadMoviesUseCase = async (outsideGetMovies) => {
  return validadeReadMoviesSchemaResponse(await outsideGetMovies());
};

export default readMoviesUseCase;
