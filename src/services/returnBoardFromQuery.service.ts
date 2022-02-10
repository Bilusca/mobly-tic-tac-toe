class ReturnBoardFromQuery {
  public execute(board: string): string {
    let boardWithNineLength: string;

    if (board.length < 9) {
      boardWithNineLength = board.padEnd(9);

      return boardWithNineLength;
    }

    return board;
  }
}

export default ReturnBoardFromQuery;
