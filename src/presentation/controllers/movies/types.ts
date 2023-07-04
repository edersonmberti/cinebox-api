import { Request } from "express";

import { IdType, CreateMovieType, MovieType } from "../../../shared/types/movie";

export type ReadMovieRequest = Request<{ id: IdType }>;

export type DeleteMovieRequest = Request<{ id: IdType }>;

export type UpdateMovieRequest = Request<any, any, MovieType>;

export type CreateMovieRequest = Request<any, any, CreateMovieType>;
