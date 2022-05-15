import React from "react";
import { createEmptyMatrix, getRandomPlayer, hasWon, Mark, squaresFilled } from "../../Utils";
import { Board } from "../Board";
import "./Game.css";

const Game = () => {
  const [boardMatrix, setBoardMatrix] = React.useState(createEmptyMatrix(3, 3));
  const [player, setPlayer] = React.useState(getRandomPlayer());
  const [gameOver, setGameOver] = React.useState(false);
  const [winner, setWinner] = React.useState("");

  const onSquareClick = React.useCallback(
    (posx: number, posy: number) => {
      let matrixCopy = [...boardMatrix];
      let value = matrixCopy[posx][posy];
      if (value !== Mark.EMPTY || winner || gameOver) {
        return;
      }
      matrixCopy[posx][posy] = player;
      setBoardMatrix(matrixCopy);
      if (hasWon(posx, posy, player, matrixCopy)) {
        setWinner(player);
        setGameOver(true);
        return;
      } else if (squaresFilled(matrixCopy)) {
        setGameOver(true);
        return;
      }
      setPlayer(oppositePlayer());
    },
    [player, winner, gameOver]
  );

  const oppositePlayer = () => {
    return player === Mark.X ? Mark.Y : Mark.X;
  };

  const resetGame = () => {
    setBoardMatrix(createEmptyMatrix(3, 3));
    setPlayer(getRandomPlayer());
    setGameOver(false);
    setWinner("");
  };

  const getGameOverMsg = () => {
    return winner ? "Winner is: " + player.toString() : "There is no winner";
  };

  return (
    <div className="game">
      <h3 className="game-title">Tic Tac Toe</h3>
      <div className="game-instructions">Click on the square to make a move.</div>
      <div style={{ width: 4 * 4 + "rem", height: "auto" }} className="game-status">
        {gameOver && (
          <div className="game-status--over">
            Game over, {getGameOverMsg()}
            <br />
            <button onClick={resetGame}>Restart</button>
          </div>
        )}
        {!gameOver && <div>Current player: {player}</div>}
      </div>
      <div className="game-board">
        <Board values={boardMatrix} onSquareClick={onSquareClick}></Board>
      </div>
    </div>
  );
};

export { Game };
