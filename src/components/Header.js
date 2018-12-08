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
    const { player1, player2 } = this.props.data;
    return (
      <HeadDiv>
        <HeadTitle>
          Welcome {player1} and {player2} <br />
          to the Tic Tac unicorn !
        </HeadTitle>
      </HeadDiv>
    );
  }
}

export default Header;
