import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  .foot {
    width: 1850px;
    height: 100px;
    background-color: black;
  }
  .line1 {
    color: white;
    text-align: center;
  }
`;
export default function Footer() {
  return (
    <Styled>
      <div className="foot">
        <h2 className="line1">Powered by Yeahboi</h2>
      </div>
    </Styled>
  );
}
