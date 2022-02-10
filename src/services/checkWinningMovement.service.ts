class CheckWinningMovemente {
  public execute(ticTacToeArray: string[]): string | null {
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

    const playerSymbol = "o";
    const computerSymbol = "x";

    for (let element: number = 0; element < ticTacToeArray.length; ++element) {
      let newTicTacToeArray: string[];

      if (
        ticTacToeArray[element] !== playerSymbol &&
        ticTacToeArray[element] !== computerSymbol
      ) {
        newTicTacToeArray = ticTacToeArray.map((symbol, index) => {
          if (element === index) {
            return playerSymbol;
          }

          return symbol;
        });

        for (let i: number = 0; i < winningCombination.length; ++i) {
          const set = winningCombination[i];

          if (
            newTicTacToeArray[set[0]] === computerSymbol &&
            newTicTacToeArray[set[1]] === computerSymbol &&
            newTicTacToeArray[set[2]] === computerSymbol
          ) {
            return null;
          }

          if (
            newTicTacToeArray[set[0]] === playerSymbol &&
            newTicTacToeArray[set[1]] === playerSymbol &&
            newTicTacToeArray[set[2]] === playerSymbol
          ) {
            return newTicTacToeArray.join("");
          }
        }
      }
    }

    return null;
  }
}

export default CheckWinningMovemente;
