import React, { Component } from "react";
import styled from "styled-components";
const FooterDiv = styled.div`
  background-color: #f7b4ee;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 160px; /* Height of the footer */
`;

class Footer extends Component {
  render() {
    return (
      <FooterDiv>
        <p>footer</p>
      </FooterDiv>
    );
  }
}

export default Footer;
