import { NotFoundError } from "../../../shared/errors";
import {
  MoviesType,
  MovieType,
  CreateMovieType,
} from "../../../shared/types/movie";

import { MoviesStored } from "./types";

import {
  createRequest,
  executeProcedure,
  setInputNumber,
  setInputString,
} from "./utils";

import ProcedureEnum from "./constants/procedure.enum";
import PropertyEnum from "./constants/property.enum";

import { mapMoviesStoredToMovies } from "./mapper";

async function getMovies(): Promise<MoviesType> {
  return mapMoviesStoredToMovies(
    await executeProcedure<MoviesStored>(
      ProcedureEnum.GET_MOVIES,
      createRequest()
    )
  );
}

async function getMovie(id: number): Promise<MovieType> {
  const request = createRequest();

  setInputNumber(request, PropertyEnum.ID, id);

  const movies = mapMoviesStoredToMovies(
    await executeProcedure<MoviesStored>(ProcedureEnum.GET_MOVIE, request)
  );

  if (movies[0]) {
    return movies[0];
  }

  throw new NotFoundError(`Movie not found with: ${id}`);
}

function createMovie(data: CreateMovieType): Promise<void> {
  const request = createRequest();

  setInputString(request, PropertyEnum.NAME, data.name);
  setInputString(request, PropertyEnum.DESCRIPTION, data.description);

  return executeProcedure<void>(ProcedureEnum.CREATE_MOVIE, request);
}

function updateMovie(data: MovieType): Promise<void> {
  const request = createRequest();

  setInputNumber(request, PropertyEnum.ID, data.id);
  setInputString(request, PropertyEnum.NAME, data.name);
  setInputString(request, PropertyEnum.DESCRIPTION, data.description);

  return executeProcedure<void>(ProcedureEnum.UPDATE_MOVIE, request);
}

function deleteMovie(id: number): Promise<void> {
  const request = createRequest();

  setInputNumber(request, PropertyEnum.ID, id);

  return executeProcedure<void>(ProcedureEnum.DELETE_MOVIE, request);
}

export default {
  getMovie,
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie,
};
