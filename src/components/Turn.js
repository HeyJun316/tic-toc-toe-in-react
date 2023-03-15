import React from 'react';
import Styled from 'styled-components';

const DivStyle = Styled.div`
  display: flex;
  justify-content: center;
`;

const DivTurnItem = Styled.div`
  width: 100%;
  font-size: 20px;
  text-align: center;
  padding: 8px;
`;

function Turn({player}) {
    return (
      <DivStyle>
          <DivTurnItem>{player.circle}</DivTurnItem>
          <DivTurnItem>{player.cross}</DivTurnItem>
      </DivStyle>
      );
  }
export default Turn;