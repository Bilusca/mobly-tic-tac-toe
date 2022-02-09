import { Router, Request, Response } from "express";
import AppError from "../errors/AppError";

type RequestQuery = {
  board: string;
};

const boardRouter = Router();

boardRouter.get(
  "/",
  (request: Request<any, any, any, RequestQuery>, response: Response) => {
    const { board } = request.query;

    if (!board) {
      throw new AppError("O board deve ser informado");
    }

    response.json({ message: "Teste de server" });
  }
);

export default boardRouter;
