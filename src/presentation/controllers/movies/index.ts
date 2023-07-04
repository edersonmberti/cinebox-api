import { Request, Response } from "express";

import moviesRepository from "../../../infrastructure/repositories/movies";
import moviesUseCase from "../../../domain/use-cases/movies";

import {
  ReadMovieRequest,
  DeleteMovieRequest,
  CreateMovieRequest,
  UpdateMovieRequest,
} from "./types";

import { DefaultError, UnknownError } from "../../../shared/errors";

const handleError = (response: Response, err: unknown) => {
  const validError = err instanceof DefaultError ? err : new UnknownError();

  response.status(validError.code).json({
    message: validError.message,
    name: validError.name,
  });
};

async function readMovies(request: Request, response: Response) {
  try {
    const movies = await moviesUseCase.readMovies(moviesRepository.getMovies);
    return response.status(200).json(movies);
  } catch (err) {
    return handleError(response, err)
  }
}

async function readMovie(request: ReadMovieRequest, response: Response) {
  try {
    const movie = await moviesUseCase.readMovie(
      moviesRepository.getMovie,
      request.params.id
    );
    return response.status(200).json(movie);
  } catch (err) {
    return handleError(response, err)
  }
}

async function deleteMovie(request: DeleteMovieRequest, response: Response) {
  try {
    await moviesUseCase.deleteMovie(
      moviesRepository.deleteMovie,
      request.params.id
    );
    return response.status(200).send();
  } catch (err) {
    return handleError(response, err)
  }
}

async function createMovie(request: CreateMovieRequest, response: Response) {
  try {
    await moviesUseCase.createMovie(moviesRepository.createMovie, request.body);
    return response.status(200).send();
  } catch (err) {
    return handleError(response, err)
  }
}

async function updateMovie(request: UpdateMovieRequest, response: Response) {
  try {
    await moviesUseCase.updateMovie(moviesRepository.updateMovie, request.body);
    return response.status(200).send();
  } catch (err) {
    return handleError(response, err)
  }
}

export default {
  readMovies,
  readMovie,
  deleteMovie,
  createMovie,
  updateMovie,
};
