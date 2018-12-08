import React, { Component } from "react";
import { FooterDiv } from "../styles";

class Footer extends Component {
  render() {
    return (
      <FooterDiv>
        <ul>
          <li>TicTacToe</li>
          <li>ReactJs</li>
          <li>Valentin Rouby</li>
          <li>2018</li>
        </ul>
      </FooterDiv>
    );
  }
}

export default Footer;
