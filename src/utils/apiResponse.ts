import type { Response } from "express";

const success = (
  res: Response,
  data: any,
  message: string,
  statusCode: number = 200,
) => {
  res.status(statusCode).json({
    success: true,
    data: data,
    message: message,
  });
};

export const ApiResponse = {
  success,
};
