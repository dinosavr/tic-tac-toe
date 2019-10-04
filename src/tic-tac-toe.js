class TicTacToe {
    constructor(field, fieldValue, turn, currentPlayerSymbol, rowIndex, columnIndex) {

        field = [
            [null, null, null,],
            [null, null, null,],
            [null, null, null,]
        ];
        currentPlayerSymbol = 'x';
        turn = 0;

        this.field = field;
        this.fieldValue = fieldValue;
        this.turn = turn;
        this.currentPlayerSymbol = currentPlayerSymbol;
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;

        // console.log(this.field);
        // console.log(this.currentPlayerSymbol);

    }

    getCurrentPlayerSymbol(turn) {

        // console.log('TurnParametr:' + turn);

        if (!turn) turn = this.turn;
        if (turn % 2 == 0) this.currentPlayerSymbol = 'x';
        else this.currentPlayerSymbol = 'o';

        // console.log(this.turn, this.currentPlayerSymbol);

        return this.currentPlayerSymbol;

    }

    nextTurn(rowIndex, columnIndex) {

        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;
        let i = this.turn;
        if (this.field[rowIndex][columnIndex] == null) i++;
        this.turn = i;

        if (this.field[rowIndex][columnIndex] == null) {
            this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this.getWinner();
        }

        this.currentPlayerSymbol = this.getCurrentPlayerSymbol(this.turn);

        // console.log('Turn: ' + this.turn);
        // console.log('currentPlayerSymbol: ' + this.currentPlayerSymbol);
        // console.log('nextTurn: ' + rowIndex + ' ' + columnIndex);
        // console.log('Field:');
        // console.log(this.field[0]);
        // console.log(this.field[1]);
        // console.log(this.field[2]);
        // console.log();
    }

    isFinished() {
        let isFinish = false;
        // should return true if game is finished (e.g. there is a winner or it is a draw)
        if (this.getWinner() || this.isDraw()) isFinish = true;

        return isFinish;
    }

    getWinner() {
        let rowIndex2 = this.rowIndex;
        let columnIndex2 = this.columnIndex;

        //         console.log('In getWinner ....................... ', this.rowIndex, this.columnIndex);
        let winner = null;
        //        should return winner symbol (x or o) or null if there is no winner yet

        let isWinnerSymbol = this.field[rowIndex2][columnIndex2];

        if ((this.field[rowIndex2][0] == isWinnerSymbol) && (this.field[rowIndex2][1] == isWinnerSymbol) && (this.field[rowIndex2][2] == isWinnerSymbol)) winner = isWinnerSymbol
        if ((this.field[0][columnIndex2] == isWinnerSymbol) && (this.field[1][columnIndex2] == isWinnerSymbol) && (this.field[2][columnIndex2] == isWinnerSymbol)) winner = isWinnerSymbol
        if ((this.field[0][0] == isWinnerSymbol) && (this.field[1][1] == isWinnerSymbol) && (this.field[2][2] == isWinnerSymbol)) winner = isWinnerSymbol
        if ((this.field[0][2] == isWinnerSymbol) && (this.field[1][1] == isWinnerSymbol) && (this.field[2][0] == isWinnerSymbol)) winner = isWinnerSymbol


        if (winner) console.log('The winner is ' + winner);

        return winner;
    }

    noMoreTurns() {
        let noMoreTurns = true;
        // should return true if there is no more fields to place a x or o

        for (let valueRow of this.field) {
            for (let value of valueRow) {
                if (value === null) noMoreTurns = false;
            }
        }
        return noMoreTurns;
    }

    isDraw() {
        // should return true if there is no more turns and no winner
        let isDraw = false;
        // console.log('isDraw() this.noMoreTurns' + this.noMoreTurns);
        // console.log('isDraw() this.getWinner' + this.getWinner);
        if (this.noMoreTurns() && (this.getWinner() == null)) isDraw = true;

        return isDraw;
    }

    getFieldValue(rowIndex, colIndex) {

        this.fieldValue = this.field[rowIndex][colIndex];
        // console.log('getFieldValue: ' + rowIndex + ' ' + colIndex + ' = ' + this.field[rowIndex][colIndex]);
        return this.fieldValue;
    }
}

module.exports = TicTacToe;
