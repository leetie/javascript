const cells = document.querySelectorAll('.cell'); // polluting global namespace
const game = function() {
    const result = document.querySelector(".result");
    const scoreboard = document.querySelector(".scoreboard");
    const board = Array(9).fill("");
    const resetButton = document.querySelector("#reset");
    resetButton.addEventListener('click', reset);

    let xIsNext = true;

    function renderBoard() {
        cells.forEach(function(el, index) {
            el.innerHTML = board[index];
        });
    }
    function updateCell() {
        if (board[this.id] != "") {
            alert("That space is taken");
            return
        }
        board[this.id] = xIsNext ? "X" : "O";
        this.innerHTML = xIsNext ? "X" : "O";
        xIsNext == true ? xIsNext = false : xIsNext = true;
        checkWinner();
    }
    function updateResult(winner) {
        winner ? result.innerHTML = `${winner} is the winner!` : result.innerHTML = "It's a tie!"; 
    }
    function checkWinner() {
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
            const [a,b,c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                console.log(`winner is ${board[a]}`);
                updateResult(board[a]);
                return board[a]; //return X or O if winner
            }
        }
        if (!board.includes("")) {
            updateResult(null);
            return;
        }
        return null; // null for loser
    }
    function reset(winner) {
        console.log("reset method")
    }
    return {
        renderBoard,
        xIsNext,
        board,
        updateCell,
    }
}();
cells.forEach(element => {
    element.addEventListener('click', game.updateCell.bind(element))
});
