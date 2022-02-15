export function getEmptyCells(board: string[]) {
  return board.map((val, idx) => [val, idx]).filter((item) => item[0] === null);
}
