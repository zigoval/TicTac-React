import React, { Component } from "react";
import unicorn1 from "../images/unicorn1.jpeg";
import unicorn2 from "../images/unicorn2.jpeg";
import empty from "../images/empty.png";
import { ImageInCase } from "../styles";

class Unicase extends Component {
  fonction = cell => {
    if (cell === "X") {
      return (
        <ImageInCase
          src={unicorn1}
          alt="Licone <3"
          width="190px"
          height="190px"
        />
      );
    } else if (cell === "O") {
      return (
        <ImageInCase
          src={unicorn2}
          alt="une autre Licone <3"
          width="190px"
          height="190px"
        />
      );
    } else {
      return (
        <ImageInCase src={empty} alt="case vide" width="100px" height="100px" />
      );
    }
  };

  render() {
    const cell = this.props.cell;
    return this.fonction(cell);
  }
}

export default Unicase;
