import { evaluate } from "./evaluate";
import { isMoveLeft } from "./isMoveLeft";
import { replace } from "./replace";

export function minimax(
  board: string[],
  depth: number,
  symbol: string,
  isMax: boolean
): number {
  const score = evaluate(board, symbol);

  if (score === 10) {
    return score - depth;
  }

  if (score === -10) {
    return score + depth;
  }

  if (!isMoveLeft(board)) {
    return 0;
  }

  const lengthCells = board.length;
  let best;

  if (isMax) {
    best = -1000;

    for (let i = 0; i < lengthCells; i++) {
      const cell = board[i];

      if (cell === null) {
        const nextCells = replace(board, i, symbol);

        best = Math.max(best, minimax(nextCells, depth + 1, symbol, !isMax));
      }
    }
  } else {
    best = 1000;

    for (let i = 0; i < lengthCells; i++) {
      const cell = board[i];

      if (cell === null) {
        const nextCells = replace(board, i, symbol);

        best = Math.min(best, minimax(nextCells, depth + 1, symbol, !isMax));
      }
    }
  }

  return best;
}
