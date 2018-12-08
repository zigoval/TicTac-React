import React, { Component } from "react";
import { HeadDiv, HeadTitle } from "../styles";

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
