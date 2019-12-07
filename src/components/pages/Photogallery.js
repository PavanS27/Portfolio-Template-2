import React from "react";

import styled from "styled-components";

const Styles = styled.div`
  .picgallery {
    width: 1850px;
    background-color: lightgrey;
    height: 1250px;
  }
`;

export default function Photogallery() {
  return (
    <Styles>
      <div className="picgallery">
        <h1></h1>
      </div>
    </Styles>
  );
}
