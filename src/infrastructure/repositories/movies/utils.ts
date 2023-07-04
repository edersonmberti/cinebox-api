import sql from "mssql/msnodesqlv8";

import ProcedureEnum from "./constants/procedure.enum";
import PropertyEnum from "./constants/property.enum";

import { DatabaseError } from "../../../shared/errors";

type ProcedureResult<T> = sql.IProcedureResult<T>;

type SQLRequest = sql.Request;

export const createRequest = () => new sql.Request();

type SetInput<T> = (
  request: SQLRequest,
  paramName: PropertyEnum,
  value?: T
) => SQLRequest;

export const setInputString: SetInput<string> = (request, paramName, value) =>
  request.input(paramName, sql.VarChar, value);

export const setInputNumber: SetInput<number> = (request, paramName, value) =>
  request.input(paramName, sql.Int, value);

const databaseConfig = {
  server: "(LocalDb)\\Cinebox",
  database: "CINEBOX",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
  },
};

const databaseConnection = async () => {
  try {
    await sql.connect(databaseConfig);
  } catch {
    throw new DatabaseError("Database connection error");
  }
};

export const executeProcedure = async <T>(procedure: ProcedureEnum,request: SQLRequest) => {
  await databaseConnection();

  return new Promise<T>((resolve, reject) => {
    request.execute<T>(
      procedure,
      function (err: unknown, result: ProcedureResult<T> | undefined) {
        if (err) reject(new DatabaseError());
        else resolve(result?.recordset as T);
      }
    );
  });
};
