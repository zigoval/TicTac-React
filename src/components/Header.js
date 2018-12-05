import React, { Component } from "react";
import styled from "styled-components";

const HeadDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: #f7b4ee;
  text-align: center;
`;

const HeadTitle = styled.h1`
  align-self: center;
`;

class Header extends Component {
  render() {
    const p1 = "player1";
    const p2 = "player2";
    return (
      <HeadDiv>
        <HeadTitle>
          Welcome {p1} and {p2}
        </HeadTitle>
      </HeadDiv>
    );
  }
}

export default Header;
