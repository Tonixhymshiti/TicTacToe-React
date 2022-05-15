enum Mark {
    X = "X",
    Y = "Y",
    EMPTY = "-",
  }

// Determine if there is a winner.
function hasWon(posx: number, posy: number, mark: Mark, board: Mark[][]) {
    // check horizontal
    let rowWin = true;
    for (let i = 0; i < 3; i++) {
      rowWin = rowWin && board[posx][i] === mark;
    }
  
    // check vertical
    let columnWin = true;
    for (let i = 0; i < 3; i++) {
      columnWin = columnWin && board[i][posy] === mark;
    }
  
    // Check diagonal
    let diagonalWin = true;
    if (posx !== posy) {
      diagonalWin = false;
    } else {
      for (let i = 0; i < 3; i++) {
        diagonalWin = diagonalWin && board[i][i] === mark;
      }
    }
  
    // Check opposite diagonal
    let oppDiagonalWin = true;
    for (let i = 0; i < 3; i++) {
      oppDiagonalWin = oppDiagonalWin && board[i][board.length - 1 - i] === mark;
    }
  
    return rowWin || columnWin || diagonalWin || oppDiagonalWin;
  }

  const getRandomPlayer = () => {
    return Math.random() > 0.5 ? Mark.X : Mark.Y;
  };
  
  const squaresFilled = (board: Mark[][]) => {
    return board.every(row => row.every(mark => mark !== Mark.EMPTY));
  }

  function createEmptyMatrix(rows: number, cols: number) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < cols; j++) {
        row[j] = Mark.EMPTY;
      }
      matrix.push(row);
    }
    return matrix;
  }

  export { Mark, hasWon, getRandomPlayer, squaresFilled, createEmptyMatrix}