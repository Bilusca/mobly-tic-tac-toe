import { Router, Request, Response } from "express";
import AppError from "../errors/AppError";
import CheckArrayValidity from "../services/checkArrayValidity.service";
import CheckWinningMovemente from "../services/checkWinningMovement.service";
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

    const checkArrayValidity = new CheckArrayValidity();

    if (!checkArrayValidity.execute(ticTacToeArray)) {
      throw new AppError("Este board é inválido.");
    }

    const checkWinningMovement = new CheckWinningMovemente();
    const winningMovement = checkWinningMovement.execute(ticTacToeArray);

    if (!winningMovement) {
      throw new AppError("Este board é inválido.");
    }

    response.json({ winning_movement: winningMovement });
  }
);

export default boardRouter;
