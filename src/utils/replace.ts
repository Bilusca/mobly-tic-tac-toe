export function replace(board: string[], index: number, value: string) {
  return [
    ...board.slice(0, index),
    value,
    ...board.slice(index + 1, board.length),
  ];
}
