import type { NextFunction, Request, Response } from "express";
import status from "http-status";

const globalError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || status.INTERNAL_SERVER_ERROR;

  // Development Error Response
  const developerErrorResponse = {
    success: false,
    message: err.message || "Something went wrong",
    error: err,
    stack: err.stack,
  };

  // Production Error Response
  const productionErrorResponse = {
    success: false,
    message: err.message || "Something went wrong",
  };

  if (process.env.NODE_ENV === "development") {
    return res.status(statusCode).json(developerErrorResponse);
  }

  return res.status(statusCode).json(productionErrorResponse);
};

export default globalError;