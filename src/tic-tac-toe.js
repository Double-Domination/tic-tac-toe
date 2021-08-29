class TicTacToe {
  constructor() {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.player1 = 'x';
    this.player2 = 'o';

    this.currentPlayerTurn = 'player1';
    //================================
    this.finished = false;
    this.draw = false;
    this.winner = false;
  }

  getCurrentPlayerSymbol() {
    let currentPlayerSymbol = this[this.currentPlayerTurn];
    return currentPlayerSymbol.toString();
  }

  getFieldValue(rowIndex, colIndex) {
    return this.board[rowIndex][colIndex];
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.board[rowIndex][columnIndex] !== null) {
      return;
    }
    this.board[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
    // this.checkGameStatus();
    //chane player
    // if (this.noMoreTurns() === true) {
    //   return false;
    // }

    // if (this.getWinner() !== null) {
    //   return false;
    // }

    // if (this.isDraw()) {
    //   return false;
    // }

    if (this.isFinished() === true) {
    } else {
      this.currentPlayerTurn =
        this.currentPlayerTurn === 'player1' ? 'player2' : 'player1';
    }
  }

  isFinished() {
    if (
      this.getWinner() === null &&
      this.isDraw() === false &&
      this.noMoreTurns() === false
    ) {
      return false;
    } else {
      return this.getWinner() ? true : true;
    }
  }

  checkGameStatus() {
    if (this.getWinner() !== null) {
      return this.getWinner();
    }

    if (this.noMoreTurns() === true) {
      return this.isDraw();
    }
  }

  noMoreTurns() {
    if (this.board.flat().includes(null) === false) {
      return true;
    } else {
      return false;
    }
  }

  isDraw() {
    if (this.noMoreTurns() === true && this.getWinner() === null) {
      return true;
    } else {
      return false;
    }
  }

  checkHorizontals(playerSymbol) {
    const line1 = [this.board[0][0], this.board[0][1], this.board[0][2]].every(
      (allvalues) => {
        return allvalues === playerSymbol;
      },
    );

    const line2 = [this.board[1][0], this.board[1][1], this.board[1][2]].every(
      (allvalues) => {
        return allvalues === playerSymbol;
      },
    );

    const line3 = [this.board[2][0], this.board[2][1], this.board[2][2]].every(
      (allvalues) => {
        return allvalues === playerSymbol;
      },
    );

    let result = [line1, line2, line3].filter((value) => {
      return value === true;
    }).length;

    return !!result;
  }

  checkVericals(playerSymbol) {
    const vertical1 = [
      this.board[0][0],
      this.board[1][0],
      this.board[2][0],
    ].every((allvalues) => {
      return allvalues === playerSymbol;
    });

    const vertical2 = [
      this.board[0][1],
      this.board[1][1],
      this.board[2][1],
    ].every((allvalues) => {
      return allvalues === playerSymbol;
    });

    const vertical3 = [
      this.board[0][2],
      this.board[1][2],
      this.board[2][2],
    ].every((allvalues) => {
      return allvalues === playerSymbol;
    });

    let result = [vertical1, vertical2, vertical3].filter((value) => {
      return value === true;
    }).length;

    return !!result;
  }

  checkDiagonals(playerSymbol) {
    const diagonalLeftToRight = [
      this.board[0][0],
      this.board[1][1],
      this.board[2][2],
    ].every((allvalues) => {
      return allvalues === playerSymbol;
    });

    const diagonalRightToLeft = [
      this.board[0][2],
      this.board[1][1],
      this.board[2][0],
    ].every((allvalues) => {
      return allvalues === playerSymbol;
    });

    let result = [diagonalRightToLeft, diagonalLeftToRight].filter((value) => {
      return value === true;
    }).length;

    return !!result;
  }

  getWinner(recivedSym = this.getCurrentPlayerSymbol()) {
    const matches = [
      this.checkHorizontals(recivedSym),
      this.checkVericals(recivedSym),
      this.checkDiagonals(recivedSym),
    ];
    // console.table(matches);

    const hasWinner = !!matches.filter((value) => {
      return value === true;
    }).length;

    return hasWinner ? recivedSym : null;
  }
}

module.exports = TicTacToe;
