class Board {
  constructor() {
    this.board = [
      ['o', 'o', 'x'],
      ['x', 'o', 'x'],
      ['o', 'x', 'x'],
    ];
    this.x = 'x';
    this.o = 'o';

    this.finished = false;
    this.winner = null;
  }

  isFinished() {
    if (this.getWinner('x') === null || this.isDraw() === false) {
      return null;
    } else {
     
      return this.getWinner();
    }
  }

  isDraw() {
   if (this.noMoreTurns()===true&&this.getWinner('x') === null) {
     return true;
   } else {
     return false;
   } 
  }

  noMoreTurns() {
    if (this.board.flat().includes(null) === false) {
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

  getWinner(recivedSym) {
    const matches = [
      this.checkHorizontals(recivedSym),
      this.checkVericals(recivedSym),
      this.checkDiagonals(recivedSym),
    ];

    const hasWinner = !!matches.filter((value) => {
      return value === true;
    }).length;

    return hasWinner ? this.getCurrentPlayerSymbol() : null;
  }
}
