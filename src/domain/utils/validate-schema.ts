import { z } from "zod";
import { UnknownError, ValidationError } from "../../shared/errors";

type ValidateSchema = <A>(parser: (data: unknown) => A) => (data: unknown) => A;

const validateSchema: ValidateSchema = (parser) => (data) => {
  try {
    return parser(data);
  } catch (err) {
    if (err instanceof z.ZodError) {
      throw new ValidationError(err.errors.map((e) => e.message).join(", "));
    }

    throw new UnknownError();
  }
};

export default validateSchema;
