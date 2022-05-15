import React from "react";
import "./Board.css";
import { Square } from "./Square";

type Props = {
  values: [][];
  onSquareClick: (row: number, col: number) => void;
};
const Board = (props: Props) => {
  const renderSquares = React.useCallback(() => {
    const boardMatrix = props.values;
    let squares: any[] = [];
    for (let i = 0; i < boardMatrix.length; i++) {
      for (let j = 0; j < boardMatrix[i].length; j++) {
        let sq = <Square key={i + "" + j} value={boardMatrix[i][j]} onClick={() => props.onSquareClick(i, j)} />;
        squares.push(sq);
      }
    }
    return squares;
  }, [props.values]);

  return <div className="board">{renderSquares()}</div>;
};

export { Board };
