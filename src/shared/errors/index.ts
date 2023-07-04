type DefaultErrorInput = {
  name: string;
  code: number;
  message: string;
};

export class DefaultError extends Error {
  code: number;

  constructor({ name, code, message }: DefaultErrorInput) {
    super(message);
    this.name = name;
    this.code = code;
  }
}

export class NotFoundError extends DefaultError {
  constructor(message: string) {
    super({ name: "NotFoundError", code: 404, message });
  }
}

export class ValidationError extends DefaultError {
  constructor(message: string) {
    super({ name: "ValidationError", code: 422, message });
  }
}

export class UnknownError extends DefaultError {
  constructor() {
    super({ name: "UnknownError", code: 418, message: "Unknown error" });
  }
}

export class DatabaseError extends DefaultError {
  constructor(message = "Database error") {
    super({ name: "DatabaseError", code: 418, message });
  }
}
