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
    let currentPlayerSymbol = this[this.currentPlayerTurn];
    // console.log(currentPlayerSymbol);
    return currentPlayerSymbol.toString();
  }

  nextTurn(rowIndex, columnIndex) {
    // if (this.noMoreTurns() === true || this.isFinished() === true) {
    //   this.status = `Finished!`;
    //   const winner = this.getWinner();
    //   const draw = this.isDraw();
    //   const finished = this.isFinished();
    //   return `FINISH CONDITION TRIGERED`;
    // }
    // insert new value
    this.gameBoard[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
    this.checkGameStatus();
    // console.table(this.gameBoard);
    //chane player
    this.currentPlayerTurn =
      this.currentPlayerTurn === 'player1' ? 'player2' : 'player1';
    // console.log(this.currentPlayerTurn);

    // return this.gameBoard;
  }

  isFinished() {
    if ((this.getWinner() || this.isDraw()) === false) {
      return false;
    } else {
      return true;
    }
  }

  checkGameStatus() {
    if (this.noMoreTurns() === true || this.isFinished() === true) {
      this.status = `Finished!`;
      const winner = this.getWinner();
      const draw = this.isDraw();
      const finished = this.isFinished();
      return this.finishGame({
        winner: winner,
        draw: draw,
        finished: finished,
      });
    } else {
      console.table(this.gameBoard);
    }
  }

  getWinner() {
    let symbolToFind = this.getCurrentPlayerSymbol();
    switch (true) {
      //rows win
      case this.gameBoard[0].every(function (x) {
        return x === symbolToFind;
      }) ||
        this.gameBoard[1].every(function (x) {
          return x === symbolToFind;
        }) ||
        this.gameBoard[2].every(function (x) {
          return x === symbolToFind;
        }):
        console.log(`winner ${getCurrentPlayerSymbol()} in rows`);
        return this.finishGame(this.getCurrentPlayerSymbol());
        break;
      //cols win conditions
      case (this.gameBoard[0][0] === this.getCurrentPlayerSymbol() &&
        this.gameBoard[0][1] === this.getCurrentPlayerSymbol() &&
        this.gameBoard[0][2]) === this.getCurrentPlayerSymbol() ||
        (this.gameBoard[1][0] === this.getCurrentPlayerSymbol() &&
          this.gameBoard[1][1] === this.getCurrentPlayerSymbol() &&
          this.gameBoard[1][2]) === this.getCurrentPlayerSymbol() ||
        (this.gameBoard[2][0] === this.getCurrentPlayerSymbol() &&
          this.gameBoard[2][1] === this.getCurrentPlayerSymbol() &&
          this.gameBoard[2][2]) === this.getCurrentPlayerSymbol():
        console.log(`winner ${this.getCurrentPlayerSymbol()} in columns`);

        return this.finishGame(this.getCurrentPlayerSymbol());
        break;
      //diagonals win condition
      case //left to right diagonal
      (this.gameBoard[0][0] === this.getCurrentPlayerSymbol() &&
        this.gameBoard[1][1] === this.getCurrentPlayerSymbol() &&
        this.gameBoard[2][2] === this.getCurrentPlayerSymbol()) ||
        //right to left diagonal MATHCES

        (this.gameBoard[0][2] === this.getCurrentPlayerSymbol() &&
          this.gameBoard[1][1] === this.getCurrentPlayerSymbol() &&
          this.gameBoard[2][0]) === this.getCurrentPlayerSymbol():
        console.log(`winner ${this.getCurrentPlayerSymbol()} in diagonals`);

        return this.finishGame(this.getCurrentPlayerSymbol());
        break;
      default:
        // console.log(`-=winner undefined=-`);
        return false;
        break;
    }
  } //patterns row col diagonals

  noMoreTurns() {
    if (this.gameBoard.flat().includes('-') === false) {
      return true;
    } else {
      return false;
    }
  }

  isDraw() {
    if (this.noMoreTurns() === true && this.getWinner() === false) {
      return this.finishGame('-=DRAW=-');
    }
    return false;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.gameBoard[rowIndex][colIndex];
  }

  finishGame(gameEndCondition) {
    console.log('-=WINNER=- is ');
    console.log(gameEndCondition);
  }
}

let game = new TicTacToe();
//x is winner
// game.nextTurn(1, 1);
// game.nextTurn(0, 1);
// game.nextTurn(0, 0);
// game.nextTurn(2, 0);
// game.nextTurn(2, 2);
// console.table(game.gameBoard);

//draw condition
game.nextTurn(0, 0);
game.nextTurn(0, 1);
game.nextTurn(0, 2);
game.nextTurn(1, 2);
game.nextTurn(2, 2);
game.nextTurn(1, 1);
game.nextTurn(2, 1);
game.nextTurn(2, 0);
game.nextTurn(1, 0);
console.table(game.gameBoard);
