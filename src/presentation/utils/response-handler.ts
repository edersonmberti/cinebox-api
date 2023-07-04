import { Response } from "express";

import { DefaultError, UnknownError } from "../../shared/errors";

import loggerService from "../../infrastructure/services/logger";

export const handleSuccess =
  <T>(response: Response) =>
  (data: T) =>
    response.status(200).json(data);

export const handleFailure = (response: Response) => (err: unknown) => {
  const validError = err instanceof DefaultError ? err : new UnknownError();

  const category = `${response.req.method} ${response.req.url}`

  loggerService
    .getLogger(category)
    .error(
      `Name: ${validError.name}`,
      `- Message: ${validError.message}`,
      `- Code: ${validError.code}`,
      `- Error: ${err}`
    );

  return response.status(validError.code).json({
    message: validError.message,
    name: validError.name,
  });
};
