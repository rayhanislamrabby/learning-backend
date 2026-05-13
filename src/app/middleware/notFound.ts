import type { NextFunction, Request, Response } from "express";
import status from "http-status";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(status.NOT_FOUND).json({
    success: false,

    message: "Api not fund ",

    error: {
      path: req.originalUrl,
      message: "Oui request path is not found ",
    },
  });
};

export default notFound;
