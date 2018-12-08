import React, { Component } from "react";
import Unicase from "./Unicase";
import { Table, Case } from "../styles";

class TicTac extends Component {
  render() {
    return (
      <Table id="tictac">
        <tbody>
          {this.props.board.map((row, x) => (
            <tr key={x}>
              {row.map((cell, y) => (
                <Case
                  className="case"
                  onClick={this.props.onHandleClick(x, y)}
                  key={y}
                >
                  <Unicase cell={cell} />
                </Case>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default TicTac;
