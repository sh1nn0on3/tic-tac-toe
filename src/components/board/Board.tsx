import React, { useState } from "react";
import Square from "../square/Square";
import "./board.scss"

interface IProps {
  currentPlayer: string;
}

const Board: React.FC<IProps> = () => {
  const squareIds = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [squares, setSquares] = useState<string[]>(squareIds.map((i) => ""))

  return <div className="board">
    {
        squareIds.map((i) => (
            <Square key={i} handleOnClick={() => {}} selected={squares[i]} />
        ))
    }
  </div>;
};

export default Board;
