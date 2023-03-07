import React from 'react';
import Styled from 'styled-components';


const Table = Styled.table`
  background: black;
  border: 2px solid black;
  margin: auto;
`

const Cell = Styled.td`
  height: 50px;
  width: 50px;
  background: white;
  cursor: pointer;
  text-align: center;
`

function Board() {
  return (
       <Table>
          <tbody>
            <tr class="row">
              <Cell></Cell>
              <Cell></Cell>
              <Cell></Cell>
            </tr>
            <tr class="row">
              <Cell></Cell>
              <Cell></Cell>
              <Cell></Cell>
            </tr>
            <tr class="row">
              <Cell></Cell>
              <Cell></Cell>
              <Cell></Cell>
            </tr>
          </tbody>
        </Table>
  );
}
export default Board;