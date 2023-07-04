import { Response } from "express";

import { DefaultError, UnknownError } from "../../shared/errors";

export const handleSuccess =
  <T>(response: Response) =>
  (data: T) =>
    response.status(200).json(data);

export const handleFailure = (response: Response) => (err: unknown) => {
  const validError = err instanceof DefaultError ? err : new UnknownError();

  return response.status(validError.code).json({
    message: validError.message,
    name: validError.name,
  });
};
