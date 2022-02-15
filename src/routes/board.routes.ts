import { Router, Request, Response } from "express";
import AppError from "../errors/AppError";
import CheckArrayValidity from "../services/checkArrayValidity.service";
import CheckBestMovement from "../services/checkBestMovement.service";
import ReturnBoardFromQuery from "../services/returnBoardFromQuery.service";

type RequestQuery = {
  board: string;
};

const boardRouter = Router();

boardRouter.get(
  "/",
  (request: Request<any, any, any, RequestQuery>, response: Response) => {
    const { board } = request.query;

    if (board === undefined) {
      throw new AppError("Por favor, informe o board.");
    }

    if (board.length > 9) {
      throw new AppError("Este board é inválido.");
    }

    const returnBoardFromQuery = new ReturnBoardFromQuery();
    const boardWithNineLegth = returnBoardFromQuery.execute(board);
    const ticTacToeArray = boardWithNineLegth.split("");

    const maxActions = ticTacToeArray.reduce((total, symbol) => {
      if (symbol !== "x" && symbol !== "o") {
        return total + 1;
      }

      return total;
    }, 0);

    const checkArrayValidity = new CheckArrayValidity();

    if (!checkArrayValidity.execute(ticTacToeArray)) {
      throw new AppError("Este board é inválido.");
    }

    const checkBestMovement = new CheckBestMovement();
    const winningMovement = checkBestMovement.execute(ticTacToeArray);

    if (!winningMovement) {
      throw new AppError("Este board é inválido.");
    }

    response.json({ best_moviment: winningMovement });
  }
);

export default boardRouter;
