import React, { useState } from "react";
import GlobalStyle from './GlobalStyle';
import Board from './components/Board';
import Styled from 'styled-components';

const processing = 'processing';
const Container = Styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
`;

const Main = Styled.div``;

const Header = Styled.div`
  padding: 16px;
`;

const Turn = Styled.div`
  display: flex;
  justify-content: center;
`;

const TurnItem = Styled.div`
  width: 100%;
  font-size: 20px;
  text-align: center;
  padding: 8px;
`;

const Footer = Styled.div`
  padding: 16px;
`;

const Button = Styled.button`
  border: 2px solid black;
  border-radius: 4px;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
  text-align: center;
  padding: 2px 50px;
  &:hover {
    color: white;
    background: black;
  }
`;

const restart = () => {
  window.location.reload();
}


function App (props) {
      const [ gameStatus, setGameStatus ] = useState(processing);
      if (gameStatus === 9) setGameStatus('draw');


      return (

        <div>
          <GlobalStyle />
          <Container>
            <Main>
              <Header>
                <h1>Tic Toc Toe</h1>
                <Turn>
                  <TurnItem>○</TurnItem>
                  <TurnItem>×</TurnItem>s
                  asdf
                </Turn>
              </Header>
              <Board
                setGameStatus={setGameStatus
                }/>
              <Footer>
                <div>{gameStatus}</div>
                <Button onClick={restart}>Restart</Button>
              </Footer>
            </Main>
          </Container>
        </div>
    );
}


export default App;