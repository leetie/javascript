const game = (function() {
    'use strict';

    const _result = document.querySelector(".result");
    const _board = Array(9).fill("");
    const _cells = document.querySelectorAll(".cell");
    const _resetButton = document.querySelector("#reset");
    let _xIsNext = true;
    _resetButton.addEventListener('click', _reset);

    function _renderBoard() {
        _cells.forEach(function(el, index) {
            el.innerHTML = _board[index]
        });
    }

    function _updateCell() {
        if (_board[this.id] != "") {
            alert("That space is taken");
            return
        }
        _board[this.id] = _xIsNext ? "X" : "O";
        this.innerHTML = _xIsNext ? "X" : "O";
        _swapPlayer();
        _checkWinner();
    }

    function _swapPlayer() {
        _xIsNext == true ? _xIsNext = false : _xIsNext = true;
    }

    function _updateResult(winner) {
        winner ? _result.innerHTML = `${winner} is the winner!` : _result.innerHTML = "It's a tie!";
    }

    function _checkWinner() {
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const[a,b,c] = lines[i];
            if (_board[a] && _board[a] === _board[b] && _board[a] === _board[c]) {
                _updateResult(_board[a]); // winner
                return _board[a];
            }
        }
        if (!_board.includes("")) {
            _updateResult(null); // tie
        }
    }

    function _addListeners() {
        _cells.forEach(element => {
            element.addEventListener('click', _updateCell.bind(element));
        })
    }

    function _reset() {
        _result.innerHTML = "";
        _xIsNext = true;
        _board.forEach((el, index) => _board[index] = "");
        _cells.forEach(el => {
            el.innerHTML = "";
        });
        _renderBoard();
    }
    _addListeners();
    return {
        //nothing yet
    }
})();