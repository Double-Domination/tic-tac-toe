// class TicTacToe {
//   constructor() {
//     this.gameBoard = [
//       [null, null, null],
//       [null, null, null],
//       [null, null, null],
//     ];
//     this.player1 = 'x';
//     this.player2 = 'o';

//     this.currentPlayerTurn = 'player1';
//     // this.currentPlayerSymbol = this[currentPlayerTurn];

//     this.finished = this.isFinished();
//     this.draw = this.isDraw();
//     this.winner = this.getWinner();
//   }

//   getCurrentPlayerSymbol() {
//     let currentPlayerSymbol = this[this.currentPlayerTurn];
//     // console.log(currentPlayerSymbol);
//     return currentPlayerSymbol.toString();
//   }

//   nextTurn(rowIndex, columnIndex) {
//     // if (this.noMoreTurns() === true || this.isFinished() === true) {
//     //   this.status = `Finished!`;
//     //   const winner = this.getWinner();
//     //   const draw = this.isDraw();
//     //   const finished = this.isFinished();
//     //   return `FINISH CONDITION TRIGERED`;
//     // }
//     // insert new value
//     // this.gameBoard[rowIndex][columnIndex] = null;
//     if (this.gameBoard[rowIndex][columnIndex] !== null) {
//       return;
//     }
//     this.gameBoard[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
//     this.checkGameStatus();
//     // console.table(this.gameBoard);
//     //chane player
//     this.currentPlayerTurn =
//       this.currentPlayerTurn === 'player1' ? 'player2' : 'player1';
//     // console.log(this.currentPlayerTurn);

//     // return this.gameBoard;
//   }

//   isFinished() {
//     if ((this.getWinner() || this.isDraw()) === false) {
//       return null;
//     } else {
//       return this.getWinner();
//     }
//   }

//   checkGameStatus() {
//     if (this.noMoreTurns() === true || this.isFinished() === true) {
//       this.status = `Finished!`;
//       const winner = this.getWinner();
//       const draw = this.isDraw();
//       const finished = this.isFinished();
//       return;
//       // return this.finishGame({
//       //   winner: winner,
//       //   draw: draw,
//       //   finished: finished,
//       // });
//     } else {
//       // console.table(this.gameBoard);
//     }
//   }

//   getWinner() {
//     let symbolToFind = this.getCurrentPlayerSymbol();
//     switch (true) {
//       //rows win
//       case this.gameBoard[0].every(function (x) {
//         return x === symbolToFind;
//       }) ||
//         this.gameBoard[1].every(function (x) {
//           return x === symbolToFind;
//         }) ||
//         this.gameBoard[2].every(function (x) {
//           return x === symbolToFind;
//         }):
//         // console.log(`winner ${this.getCurrentPlayerSymbol()} in rows`);
//         // return this.finishGame(this.getCurrentPlayerSymbol());
//         return this.getCurrentPlayerSymbol();
//         break;
//       //cols win conditions
//       case (this.gameBoard[0][0] === this.getCurrentPlayerSymbol() &&
//         this.gameBoard[0][1] === this.getCurrentPlayerSymbol() &&
//         this.gameBoard[0][2]) === this.getCurrentPlayerSymbol() ||
//         (this.gameBoard[1][0] === this.getCurrentPlayerSymbol() &&
//           this.gameBoard[1][1] === this.getCurrentPlayerSymbol() &&
//           this.gameBoard[1][2]) === this.getCurrentPlayerSymbol() ||
//         (this.gameBoard[2][0] === this.getCurrentPlayerSymbol() &&
//           this.gameBoard[2][1] === this.getCurrentPlayerSymbol() &&
//           this.gameBoard[2][2]) === this.getCurrentPlayerSymbol():
//         // console.log(`winner ${this.getCurrentPlayerSymbol()} in columns`);

//         // return this.finishGame(this.getCurrentPlayerSymbol());

//         return this.getCurrentPlayerSymbol();
//         break;
//       //diagonals win condition
//       case //left to right diagonal
//       (this.gameBoard[0][0] === this.getCurrentPlayerSymbol() &&
//         this.gameBoard[1][1] === this.getCurrentPlayerSymbol() &&
//         this.gameBoard[2][2] === this.getCurrentPlayerSymbol()) ||
//         //right to left diagonal MATHCES

//         (this.gameBoard[0][2] === this.getCurrentPlayerSymbol() &&
//           this.gameBoard[1][1] === this.getCurrentPlayerSymbol() &&
//           this.gameBoard[2][0]) === this.getCurrentPlayerSymbol():
//         // console.log(`winner ${this.getCurrentPlayerSymbol()} in diagonals`);

//         // return this.finishGame(this.getCurrentPlayerSymbol());
//         return this.getCurrentPlayerSymbol();
//         break;
//       default:
//         return null;
//         break;
//     }
//   } //patterns row col diagonals

//   noMoreTurns() {
//     if (this.gameBoard.flat().includes(null) === false) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   isDraw() {
//     if (this.noMoreTurns() === true && this.getWinner() === null) {
//       // return this.finishGame('-=DRAW=-');
//       return true;
//     }
//     return false;
//   }

//   getFieldValue(rowIndex, colIndex) {
//     return this.gameBoard[rowIndex][colIndex];
//   }

//   finishGame(gameEndCondition) {
//     // console.log('-=WINNER=- is ');
//     // console.log(gameEndCondition);
//   }
// }

// let game;

// game = new TicTacToe();
// game.nextTurn(1, 0);
// console.log(game.isDraw()); //(false);

// game.nextTurn(2, 2);
// console.log(game.isDraw()); //(false);

// game.nextTurn(0, 2);
// console.log(game.isDraw()); //(false);

// game.nextTurn(1, 0);
// console.log(game.isDraw()); //(false);

// game.nextTurn(2, 2);
// console.log(game.isDraw()); //(false);

// game.nextTurn(1, 1);
// console.log(game.isDraw()); //(false);

// game.nextTurn(0, 2);
// console.log(game.isDraw()); //(false);

// game.nextTurn(2, 2);
// console.log(game.isDraw()); //(false);

// game.nextTurn(0, 2);
// console.log(game.isDraw()); //(false);

// game.nextTurn(0, 2);
// console.log(game.isDraw()); //(false);

// game.nextTurn(1, 1);
// console.log(game.isDraw()); //(false);

// game.nextTurn(1, 2);
// console.log(game.isDraw()); //(false);

// game.nextTurn(1, 1);
// console.log(game.isDraw()); //(false);

// game.nextTurn(1, 2);
// console.log(game.isDraw()); //(false);

// game.nextTurn(2, 0);
// console.log(game.isDraw()); //(false);

// game.nextTurn(0, 0);
// console.log(game.isDraw()); //(false);

// game.nextTurn(2, 0);
// console.log(game.isDraw()); //(false);

// game.nextTurn(1, 1);
// console.log(game.isDraw()); //(false);

// game.nextTurn(0, 1);
// console.log(game.isDraw()); //(false);

// game.nextTurn(1, 2);
// console.log(game.isDraw()); //(false);

// game.nextTurn(1, 1);
// console.log(game.isDraw()); //(false);

// game.nextTurn(0, 1);
// console.log(game.isDraw()); //(false);

// game.nextTurn(2, 0);
// console.log(game.isDraw()); //(false);

// game.nextTurn(2, 1);
// console.log(game.isDraw()); //(true);

class TicTacToe {
  constructor() {
    this.gameBoard = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.player1 = 'x';
    this.player2 = 'o';

    this.currentPlayerTurn = 'player1';
    // this.currentPlayerSymbol = this[currentPlayerTurn];

    this.finished = this.isFinished();
    this.draw = this.isDraw();
    this.winner = this.getWinner();
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
    // this.gameBoard[rowIndex][columnIndex] = null;
    if (this.gameBoard[rowIndex][columnIndex] !== null) {
      return;
    }
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
    if (this.getWinner() === null || this.isDraw() === false) {
      return null;
    } else {
      this.isFinished = true;
      return this.getWinner();
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
      // console.table(this.gameBoard);
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
        // console.log(`winner ${this.getCurrentPlayerSymbol()} in rows`);
        // return this.finishGame(this.getCurrentPlayerSymbol());
        return this.getCurrentPlayerSymbol();
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
        // console.log(`winner ${this.getCurrentPlayerSymbol()} in columns`);

        // return this.finishGame(this.getCurrentPlayerSymbol());

        return this.getCurrentPlayerSymbol();
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
        // console.log(`winner ${this.getCurrentPlayerSymbol()} in diagonals`);

        // return this.finishGame(this.getCurrentPlayerSymbol());
        return this.getCurrentPlayerSymbol();
        break;
      default:
        // console.log(`-=winner undefined=-`);
        return null;
        break;
    }
  } //patterns row col diagonals

  noMoreTurns() {
    if (this.gameBoard.flat().includes(null) === false) {
      return true;
    } else {
      return false;
    }
  }

  isDraw() {
    // if (this.noMoreTurns() === true && this.getWinner() === null) {
    //   // return this.finishGame('-=DRAW=-');
    //   return true;
    // }
    // return false;

    if (this.isFinished() === false) {
      return false;
    } else {
      return true;
    }
  }

  getFieldValue(rowIndex, colIndex) {
    return this.gameBoard[rowIndex][colIndex];
  }

  finishGame(gameEndCondition) {
    // console.log('-=WINNER=- is ');
    console.log(gameEndCondition);
  }
}
