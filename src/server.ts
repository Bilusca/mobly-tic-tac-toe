import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import AppError from "./errors/AppError";
import routes from "./routes";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
);

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
