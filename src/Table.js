import React, { Component } from "react";
import unicorn1 from "./images/unicorn1.jpeg";
import unicorn2 from "./images/unicorn2.jpeg";
import empty from "./images/empty.png";

class Unicase extends Component {
  fonction = cell => {
    if (cell === "X") {
      return <img src={unicorn1} alt="Licone <3" width="99%" height="98%" />;
    } else if (cell === "O") {
      return (
        <img
          src={unicorn2}
          alt="une autre Licone <3"
          width="99%"
          height="98%"
        />
      );
    } else {
      return (
        <img
          src={empty}
          alt="une autre Licone <3"
          width="100px"
          height="100px"
        />
      );
    }
  };
  render() {
    const board = this.props.state.board;
    const cell = this.props.cell;
    const playerOne = this.props.state.p1TurnYouOn;
    return this.fonction(cell);
  }
}

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: "player1",
      player2: "player2",
      score: {
        ScoreP1: 0,
        ScoreP2: 0
      },
      p1TurnYouOn: true,
      board: [["", "", ""], ["", "", ""], ["", "", ""]]
    };
    this.handleChange.bind(this);
    this.handleclick.bind(this);
  }

  fonction = playerOne => {
    if (playerOne) {
      this.setState({ p1TurnYouOn: !this.state.p1TurnYouOn });
      return "X";
    } else {
      this.setState({ p1TurnYouOn: !this.state.p1TurnYouOn });
      return "O";
    }
  };

  handleclick = (x, y) => () => {
    const newBoard = this.state.board.map((row, rx) =>
      row.map((cell, cy) =>
        x === rx && y === cy
          ? cell === ""
            ? this.fonction(this.state.p1TurnYouOn)
            : cell
          : cell
      )
    );
    this.setState({ board: newBoard });
  };

  createTable = () => {
    return (
      <table id="tictac">
        <tbody>
          {this.state.board.map((row, x) => (
            <tr>
              {row.map((cell, y) => (
                <td className="case" onClick={this.handleclick(x, y)}>
                  <Unicase x={x} y={y} state={this.state} cell={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  createScore = () => {
    return (
      <table>
        <tbody>
          <tr>
            <td>{this.state.player1}</td>
            <td>{this.state.player2}</td>
          </tr>
          <tr>
            <td>{this.state.score.ScoreP1}</td>
            <td>{this.state.score.ScoreP2}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  handleChange = e => {
    if (e.target.name === "player1") {
      this.setState({ player1: e.target.value });
    } else {
      this.setState({ player2: e.target.value });
    }
  };

  render() {
    return (
      <div>
        {this.createTable()}
        {this.createScore()}
        <button>Rejouer</button>
        <div>
          <label>Joueur 1 : </label>
          <input type="text" name="player1" onChange={this.handleChange} />
          <label>Joueur 2 : </label>
          <input type="text" name="player2" onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default Table;
