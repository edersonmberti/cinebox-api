import { Response } from "express";

import moviesRepository from "../../../infrastructure/repositories/movies";
import moviesUseCase from "../../../domain/use-cases/movies";

import {
  ReadMoviesRequest,
  ReadMovieRequest,
  DeleteMovieRequest,
  CreateMovieRequest,
  UpdateMovieRequest,
} from "./types";

import { handleFailure, handleSuccess } from "../../utils/response-handler";

function readMovies(_: ReadMoviesRequest, response: Response) {
  return moviesUseCase
    .readMovies(moviesRepository.getMovies)
    .then(handleSuccess(response))
    .catch(handleFailure(response));
}

function readMovie(request: ReadMovieRequest, response: Response) {
  return moviesUseCase
    .readMovie(moviesRepository.getMovie, request.params.id)
    .then(handleSuccess(response))
    .catch(handleFailure(response));
}

function deleteMovie(request: DeleteMovieRequest, response: Response) {
  return moviesUseCase
    .deleteMovie(moviesRepository.deleteMovie, request.params.id)
    .then(handleSuccess(response))
    .catch(handleFailure(response));
}

function createMovie(request: CreateMovieRequest, response: Response) {
  return moviesUseCase
    .createMovie(moviesRepository.createMovie, request.body)
    .then(handleSuccess(response))
    .catch(handleFailure(response));
}

function updateMovie(request: UpdateMovieRequest, response: Response) {
  return moviesUseCase
    .updateMovie(moviesRepository.updateMovie, request.body)
    .then(handleSuccess(response))
    .catch(handleFailure(response));
}

export default {
  readMovies,
  readMovie,
  deleteMovie,
  createMovie,
  updateMovie,
};
