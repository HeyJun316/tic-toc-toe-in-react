import React from "react";
import GlobalStyle from './GlobalStyle';
import Turn from './components/Turn';
import Board from './components/Board';
import Styled from 'styled-components';

const Container = Styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
`;

const Main = Styled.div``;

const Header = Styled.div`
  padding: 16px;
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

function App () {
      return (

        <div>
          <GlobalStyle />
          <Container>
            <Main>
              <Header>
                <h1>Tic Toc Toe</h1>
                <Turn />
              </Header>
              <Board />
              <Footer>
                <Button onClick={restart}>Restart</Button>
              </Footer>
            </Main>
          </Container>
        </div>
    );
}


export default App;