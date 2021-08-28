class TicTacToe {
  constructor() {
    this.gameBoard = [
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-'],
    ];
    this.player1 = 'x';
    this.player2 = 'o';

    this.currentPlayerTurn = 'player1';
    // this.currentPlayerSymbol = this[currentPlayerTurn];

    this.status = 'playing';
  }

  getCurrentPlayerSymbol() {
    return this[this.currentPlayerTurn];
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.noMoreTurns() || this.isFinished()) {
      this.status = `Finished!`;
      const winner = this.getWinner();
      const draw = this.isDraw();
      const finished = this.isFinished();
      console.table(this.gameBoard);
      return { winner: winner, draw: draw, finished: finished };
    }
    // insert new value
    this.gameBoard[rowIndex][columnIndex] = getCurrentPlayerSymbol();
    //chane player
    this.currentPlayerTurn =
      this.currentPlayerTurn === 'player1' ? 'player2' : 'player1';
    console.table(this.gameBoard);
    return this.gameBoard;
  }

  isFinished() {
    if ((this.getWinner() || this.isDraw()) === false) {
      return false;
    } else {
      return true;
    }
  }

  getWinner() {
    switch (true) {
      //rows win
      case this.gameBoard[0].every(this.getCurrentPlayerSymbol()) ||
        this.gameBoard[1].every(this.getCurrentPlayerSymbol()) ||
        this.gameBoard[2].every(this.getCurrentPlayerSymbol()):
        console.log(`winner ${getCurrentPlayerSymbol()} in rows`);
        return this.getCurrentPlayerSymbol();
        break;
      //cols win conditions
      case (this.gameBoard[0][0] &&
        this.gameBoard[0][1] &&
        this.gameBoard[0][2]) === this.getCurrentPlayerSymbol() ||
        (this.gameBoard[1][0] &&
          this.gameBoard[1][1] &&
          this.gameBoard[1][2]) === this.getCurrentPlayerSymbol() ||
        (this.gameBoard[2][0] &&
          this.gameBoard[2][1] &&
          this.gameBoard[2][2]) === this.getCurrentPlayerSymbol():
        console.log(`winner ${this.getCurrentPlayerSymbol()} in columns`);

        return this.getCurrentPlayerSymbol();
        break;
      //diagonals win condition
      case //left to right diagonal
      (this.gameBoard[0][0] && this.gameBoard[1][1] && this.gameBoard[2][2]) ===
        this.getCurrentPlayerSymbol() ||
        //right to left diagonal MATHCES

        (this.gameBoard[0][2] &&
          this.gameBoard[1][1] &&
          this.gameBoard[2][0]) === this.getCurrentPlayerSymbol():
        console.log(`winner ${this.getCurrentPlayerSymbol()} in diagonals`);

        return this.getCurrentPlayerSymbol();
        break;
      default:
        console.log(`-=winner undefined=-`);
        return false;
        break;
    }
  } //patterns row col diagonals

  noMoreTurns() {
    if (this.gameBoard.includes('-') === false) {
      return true;
    }
  }

  isDraw() {
    if (noMoreTurns() === true && getWinner() === false) {
      return true;
    }
    return false;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.gameBoard[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
