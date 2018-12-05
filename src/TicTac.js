import React, { Component } from "react";
import Unicase from "./Unicase";
import styled from "styled-components";

const Case = styled.td`
  border: solid black 1px;
  border-radius: 15%;
  text-align: center;
  align-content: center;
  width: 33%;
  height: 33%;
`;
const Table = styled.table`
  width: 33%;
  margin: 50px auto;
`;

class TicTac extends Component {
  render() {
    return (
      <Table id="tictac">
        <tbody>
          {this.props.board.map((row, x) => (
            <tr>
              {row.map((cell, y) => (
                <Case className="case" onClick={this.props.onHandleClick(x, y)}>
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
