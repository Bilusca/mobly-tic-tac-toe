import { getEmptyCells } from "./getEmptyCell";

export function isMoveLeft(board: string[]) {
  const emptyCells = getEmptyCells(board);
  return emptyCells.length > 0;
}
