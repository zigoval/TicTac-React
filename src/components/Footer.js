import React, { Component } from "react";
import styled from "styled-components";
import Score from "./Score";

const FooterDiv = styled.div`
  background-color: #f7b4ee;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 160px; /* Height of the footer */
`;

//<Score scoreP1={scoreP1} scoreP2={scoreP2} reset={this.resetGame} />

class Footer extends Component {
  render() {
    const p1 = "player1";
    const p2 = "player2";
    const reset = this.props.reset;
    return (
      <FooterDiv>
        <Score reset={reset} />
      </FooterDiv>
    );
  }
}

export default Footer;
