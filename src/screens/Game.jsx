import React, { useState } from "react";
import { GameComponent } from "../components/GameComponent";

const getInitialBoard = () => [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

const POSIBLE_WINS = [
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],
  [[0, 0], [1, 1], [2, 2]],
  [[2, 0], [1, 1], [0, 2]],
  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]]
];

export const Game = () => {
  const [board, setBoard] = useState(getInitialBoard());
  const [player, setPlayer] = useState(Math.random() < 0.5 ? "X" : "O");
  const [isWinner, setIsWinner] = useState(false);
  const didWin = () => {
    const isWinner = POSIBLE_WINS.find(win =>
      win.every(pos => board[pos[0]][pos[1]] === player)
    );
    setIsWinner(isWinner);
    return isWinner;
  };
  const handlePlay = ({ row, col }) => {
    if (!board[row][col] && !isWinner) {
      const newBoard = [...board];
      newBoard[row][col] = player;
      setBoard(newBoard);
      if (didWin(newBoard)) {
        return undefined;
      }
      board.find(row => row.find(ele => !ele) !== undefined)
        ? player === "X"
          ? setPlayer("O")
          : setPlayer("X")
        : setPlayer(null);
    }
  };
  const handleReset = () => {
    setBoard(getInitialBoard());
    setPlayer(Math.random() < 0.5 ? "X" : "O");
    setIsWinner(false);
  };
  console.log(isWinner);
  return (
    <GameComponent
      board={board}
      player={player}
      onPlay={handlePlay}
      onReset={handleReset}
      isWinner={isWinner}
    />
  );
};
