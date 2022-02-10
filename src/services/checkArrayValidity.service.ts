class CheckArrayValidity {
  public execute(arrayOfElements: string[]): boolean {
    const arrayToCheck = ["x", "o", " "];

    const checkExistsInArray = arrayOfElements.every((ticTacToeElement) =>
      arrayToCheck.includes(ticTacToeElement)
    );

    if (!checkExistsInArray) {
      return false;
    }

    return true;
  }
}

export default CheckArrayValidity;
