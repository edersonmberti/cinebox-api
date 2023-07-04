import { z } from "zod";

export const Id = z.coerce.number({ required_error: "Id is required" });

const Name = z.coerce
  .string({ required_error: "Name is required" })
  .min(2, "Name need to have minimum 4 characters");

const Description = z
  .string({ required_error: "Description is required" })
  .min(4, "Description need to have minimum 4 characters");

export const Movie = z.object({
  id: Id,
  name: Name,
  description: Description,
});

export const CreateMovie = Movie.omit({ id: true });

export const Movies = Movie.array();

export type IdType = z.infer<typeof Id>;

export type NameType = z.infer<typeof Name>;

export type DescriptionType = z.infer<typeof Description>;

export type MovieType = z.infer<typeof Movie>;

export type MoviesType = z.infer<typeof Movies>;

export type CreateMovieType = z.infer<typeof CreateMovie>;
