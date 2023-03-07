import React from 'react';
import Styled from 'styled-components';

const DivStyle = Styled.div`
 display: flex;
 justify-content: center;
`

function Turn() {
    return (
      <DivStyle>
          <div class="turn-item circle active">○</div>
          <div class="turn-item cross">×</div>
      </DivStyle>
      );
  }
export default Turn;