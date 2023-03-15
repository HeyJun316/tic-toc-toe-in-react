import React from 'react';
// import Styled from 'styled-components';

// const Squeare = Styled.h5`
//   height: 50px;
//   width: 50px;
//   background: white;
//   cursor: pointer;
//   text-align: center;
// `;

function Cell (props) {
  return (
    <div
      onClick={props.onClick}
      style={{
        border: "1px solid",
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
      className="square"
    >
      <h5>{props.value}</h5>
    </div>
  );
}
export default Cell;