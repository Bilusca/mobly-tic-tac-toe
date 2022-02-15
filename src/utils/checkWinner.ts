export function checkWinner(board: string[], symbol: string): boolean {
  const winningCombination = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [2, 4, 6],
    [6, 7, 8],
  ];

  for (let i: number = 0; i < winningCombination.length; ++i) {
    const set = winningCombination[i];

    if (
      board[set[0]] === symbol &&
      board[set[1]] === symbol &&
      board[set[2]] === symbol
    ) {
      return true;
    }

    return false;
  }

  return false;
}
