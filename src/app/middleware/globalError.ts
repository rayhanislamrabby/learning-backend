import type { NextFunction, Request, Response } from "express";
import status from "http-status";

const globalError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Status Code
  const statusCode = err.statusCode || status.INTERNAL_SERVER_ERROR;

  // Developer Error (Only terminal)
  console.log("Global Error");
  console.log(err);
  console.log(err.stack);

  // Client Error Response
  res.status(statusCode).json({
    success: false,
    message: err.message || "Something went wrong",
  });
};

export default globalError;
