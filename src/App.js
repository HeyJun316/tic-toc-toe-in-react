import React from "react";
import GlobalStyle from './GlobalStyle';
import Turn from './components/Turn';
import Board from './components/Board';
import Styled from 'styled-components';

const Header = Styled.div`
  padding: 16px;
`

function App () {
      return (
        <div>
          <GlobalStyle />
          <Header>
            <h1>Tic Toc Toe</h1>
            <Turn />
          </Header>
          <Board />
        </div>
    );
}


export default App;