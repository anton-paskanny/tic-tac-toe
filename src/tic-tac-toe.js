class TicTacToe {
    constructor() {
      this._currentPlayerSymbol = 'x';
      this._gameField = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ];
      this._winners = [];
    }

    getCurrentPlayerSymbol() {
      return this._currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
      if (this._currentPlayerSymbol === 'x' && this._gameField[rowIndex][columnIndex] === null) {
        this._currentPlayerSymbol = 'o';
        this._gameField[rowIndex][columnIndex] = 'x';

        if (this._gameField[0][0] === 'x' && this._gameField[0][1] === 'x' && this._gameField[0][2] === 'x') {
          this._winners.push('x');
        } else if (this._gameField[1][0] === 'x' && this._gameField[1][1] === 'x' && this._gameField[1][2] === 'x') {
          this._winners.push('x');
        } else if (this._gameField[2][0] === 'x' && this._gameField[2][1] === 'x' && this._gameField[2][2] === 'x') {
          this._winners.push('x');
        } else if (this._gameField[0][0] === 'x' && this._gameField[1][1] === 'x' && this._gameField[2][2] === 'x') {
          this._winners.push('x');
        } else if (this._gameField[0][2] === 'x' && this._gameField[1][1] === 'x' && this._gameField[2][0] === 'x') {
          this._winners.push('x');
        } else if (this._gameField[0][0] === 'x' && this._gameField[1][0] === 'x' && this._gameField[2][0] === 'x') {
          this._winners.push('x');
        } else if (this._gameField[0][1] === 'x' && this._gameField[1][1] === 'x' && this._gameField[2][1] === 'x') {
          this._winners.push('x');
        } else if (this._gameField[0][2] === 'x' && this._gameField[1][2] === 'x' && this._gameField[2][2] === 'x') {
          this._winners.push('x');
        }

      } else if (this._currentPlayerSymbol === 'x' && this._gameField[rowIndex][columnIndex] !== null) {
        this._currentPlayerSymbol = 'x';
      } else if (this._currentPlayerSymbol === 'o' && this._gameField[rowIndex][columnIndex] === null) {
        this._currentPlayerSymbol = 'x';
        this._gameField[rowIndex][columnIndex] = 'o';

        if (this._gameField[0][0] === 'o' && this._gameField[0][1] === 'o' && this._gameField[0][2] === 'o') {
          this._winners.push('o');
        } else if (this._gameField[1][0] === 'o' && this._gameField[1][1] === 'o' && this._gameField[1][2] === 'o') {
          this._winners.push('o');
        } else if (this._gameField[2][0] === 'o' && this._gameField[2][1] === 'o' && this._gameField[2][2] === 'o') {
          this._winners.push('o');
        } else if (this._gameField[0][0] === 'o' && this._gameField[1][1] === 'o' && this._gameField[2][2] === 'o') {
          this._winners.push('o');
        } else if (this._gameField[0][2] === 'o' && this._gameField[1][1] === 'o' && this._gameField[2][0] === 'o') {
          this._winners.push('o');
        } else if (this._gameField[0][0] === 'o' && this._gameField[1][0] === 'o' && this._gameField[2][0] === 'o') {
          this._winners.push('o');
        } else if (this._gameField[0][1] === 'o' && this._gameField[1][1] === 'o' && this._gameField[2][1] === 'o') {
          this._winners.push('o');
        } else if (this._gameField[0][2] === 'o' && this._gameField[1][2] === 'o' && this._gameField[2][2] === 'o') {
          this._winners.push('o');
        }

      } else if (this._currentPlayerSymbol === 'o' && this._gameField[rowIndex][columnIndex] !== null) {
        this._currentPlayerSymbol = 'o';
      }
    }

    isFinished() {
      if (this.noMoreTurns() && this._winners.length === 0) {
        return true;
      } else if (!this.noMoreTurns() && this._winners.length !== 0) {
        return true;
      } else if (this.noMoreTurns() && this._winners.length !== 0) {
        return true;
      } else {
        return false;
      }
    }

    getWinner() {
      return this._winners.length !== 0 ? this._winners[0] : null;
    }

    noMoreTurns() {
      let full = null;

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (this._gameField[i][j] !== null) {
            full++;
          }
        }
      }

      return full === 9 ? true : false;
    }

    isDraw() {
      if (!this.isFinished() || this.getWinner()) {
        return false;
      } else {
        return true;
      }
    }

    getFieldValue(rowIndex, colIndex) {
      return this._gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
