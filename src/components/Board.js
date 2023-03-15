import React, { useState } from 'react';
// import Cell from 'react'
import Styled from 'styled-components';

const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const patterns = [
  // horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // cross
  [0, 4, 8],
  [2, 4, 6]
]

const Table = Styled.table`
  background: black;
  border: 2px solid black;
  margin: auto;
`;
const Cell = Styled.td`
  height: 50px;
  width: 50px;
  background: white;
  cursor: pointer;
  text-align: center;
`;
let count = 0;
let fin = false;

function checkWin(board) {
  return patterns.some(([first, second, third]) => {
    if (board[first] !== null && (board[first] === board[second] && board[second] === board[third])) {
      return true
    }

    return false
  })
  }

function Board(props) {

  const [ boardState, setValue ] = useState(board.fill(null));
  const [ circleTurn, setIsCircleTurn ] = useState(true);

  if (checkWin(boardState)) {
     props.setGameStatus(`${circleTurn ? '×' : '○'} Win~`);
     fin = true;
  };

  const cellClick = (i) => {
    if (boardState[i] !== null || fin === true) {
      return;
    }
    circleTurn === true ? setIsCircleTurn(false): setIsCircleTurn(true) ;
    const squares = boardState.slice();
    squares[i] = circleTurn ? '○' : 'x';
    count++;

    if (count === 9) {
      props.setGameStatus(count);
      fin = true;
    }
    setValue(squares);


};
  return (
        <Table>
          <tbody>
            <tr className="row">
              <Cell onClick={() => cellClick(0)}>{boardState[0]}</Cell>
              <Cell onClick={() => cellClick(1)}>{boardState[1]}</Cell>
              <Cell onClick={() => cellClick(2)}>{boardState[2]}</Cell>
            </tr>
            <tr className="row">
              <Cell onClick={() => cellClick(3)}>{boardState[3]}</Cell>
              <Cell onClick={() => cellClick(4)}>{boardState[4]}</Cell>
              <Cell onClick={() => cellClick(5)}>{boardState[5]}</Cell>
            </tr>
            <tr className="row">
              <Cell onClick={() => cellClick(6)}>{boardState[6]}</Cell>
              <Cell onClick={() => cellClick(7)}>{boardState[7]}</Cell>
              <Cell onClick={() => cellClick(8)}>{boardState[8]}</Cell>
            </tr>
          </tbody>
        </Table>
  );
}
export default Board;