//Program that creates a string that represents a grid of the size of an argument
// eg - chessBoard(8) => 
//      
//       # # # #
//      # # # # 
//       # # # #
//      # # # # 
//       # # # #
//      # # # # 
//       # # # #
//      # # # # 

function chessBoard(num) {
    for(let i = 0; i < num; i++) {
        let str = ""
        for(let j = 0; j < num; j++) {
            (i + j) % 2 == 0 ? str += " " : str += "#";
        }
        console.log(str);
    }
}

chessBoard(8);