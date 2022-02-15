import { minimax } from "./minimax";
import { replace } from "./replace";

export function bestAction(board: string[], symbol: string) {
  let bestValue = -1000;
  let bestMove = null;

  for (let i = 0; i < board.length; i++) {
    const cell = board[i];

    if (cell === " ") {
      const nextCells = replace(board, i, symbol);

      const moveValue = minimax(nextCells, 0, symbol, false);

      if (moveValue > bestValue) {
        bestValue = moveValue;
        bestMove = i;
      }
    }
  }

  return bestMove;
}
