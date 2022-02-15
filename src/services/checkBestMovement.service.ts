import { bestAction } from "../utils/bestAction";
import { checkWinner } from "../utils/checkWinner";
import { replace } from "../utils/replace";

const playerSymbol = "o";
const computerSymbol = "x";

class CheckBestMovement {
  public execute(ticTacToeArray: string[]): string | null {
    const checkPlayer = checkWinner(ticTacToeArray, "o");
    const checkComputer = checkWinner(ticTacToeArray, "x");

    if (checkPlayer || checkComputer) {
      return null;
    }

    const playerSymbols = ticTacToeArray.reduce((total, symbol) => {
      if (symbol === playerSymbol) {
        return (total += 1);
      }

      return total;
    }, 0);

    const computerSymbols = ticTacToeArray.reduce((total, symbol) => {
      if (symbol === computerSymbol) {
        return (total += 1);
      }

      return total;
    }, 0);

    if (
      computerSymbols === playerSymbols ||
      computerSymbols - playerSymbols === 1
    ) {
      const bestMovement = bestAction(ticTacToeArray, "o");

      if (bestMovement !== null) {
        const replacedTicTacToeArray = replace(
          ticTacToeArray,
          bestMovement,
          "o"
        );
        return replacedTicTacToeArray.join("");
      }

      return null;
    }

    return null;
  }
}

export default CheckBestMovement;
