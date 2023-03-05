import React from "react";
import GlobalStyle from './GlobalStyle';
import Turn from './components/Turn';
// import Style from 'styled-components';


class App extends React.Component {
  render () {
      return (
      <div>
        <GlobalStyle />
        <h1>Tic Toc Toe</h1>
        <div>
          <Turn />
        </div>
      </div>
    );
  }
}


export default App;