import { z } from "zod";

const Name = z.coerce.string({ required_error: "Name is required" });

export type NameType = z.infer<typeof Name>

const Description = z
  .string({ required_error: "Description is required" })
  .min(4, "Description need to have minimum 4 characters");

export type DescriptionType = z.infer<typeof Description>

export const Id = z.coerce.number({ required_error: "Id is required" });

export type IdType = z.infer<typeof Id>

export const Movie = z.object({
  id: Id,
  name: Name,
  description: Description,
});

export type MovieType = z.infer<typeof Movie>

export const Movies = Movie.array()

export type MoviesType = z.infer<typeof Movies>

export const MovieStored = z.object({
  Id,
  Name,
  Description,
})

export type MovieStoredType = z.infer<typeof MovieStored>

export const MoviesStored = MovieStored.array()

export type MoviesStoredType = z.infer<typeof MoviesStored>

export const CreateMovie = z.object({
  name: Name,
  description: Description,
})

export type CreateMovieType = z.infer<typeof CreateMovie>
