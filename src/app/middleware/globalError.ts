import type { NextFunction, Request, Response } from "express";
import status from "http-status";

const globalError = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  // Status Code
  const statusCode = err.statusCode || status.INTERNAL_SERVER_ERROR;

  // Client Error Response
  res.status(statusCode).json({
    success: false,
    message: err.message || "Something went wrong",
  });

  // Developer Error (Only terminal)
  console.log("Global Error");
  console.log(err);
  console.log(err.stack);
};

export default globalError;
