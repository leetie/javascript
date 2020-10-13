const cells = document.querySelectorAll('.cell'); // polluting global namespace
const game = function() {
    const board = Array(9).fill("");
    let xIsNext = true;
    function renderBoard() {
        cells.forEach(function(el, index) {
            el.innerHTML = board[index];
        });
    }
    function updateCell() {
        console.log("in update cell method");
        console.log(this);
        console.log(xIsNext)
        this.innerHTML = xIsNext ? "X" : "O";
        xIsNext == true ? xIsNext = false : xIsNext = true;
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
