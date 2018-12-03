import React, { Component } from "react";
import unicorn1 from "./images/unicorn1.jpeg";
import unicorn2 from "./images/unicorn2.jpeg";

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
  handleclick = (x, y) => () => {
    const newBoard = this.state.board.map((row, rx) =>
      row.map((cell, cy) =>
        x === rx && y === cy
          ? this.state.p1TurnYouOn
            ? "X"
            : "O"
          : cell === ""
          ? ""
          : cell
      )
    );
    this.setState({ board: newBoard });
    this.setState({ p1TurnYouOn: !this.state.p1TurnYouOn });
  };

  createTable = () => {
    return (
      <table id="tictac">
        <tbody>
          {this.state.board.map((row, x) => (
            <tr>
              {row.map((cell, y) => (
                <td className="case" onClick={this.handleclick(x, y)}>
                  {this.state.board[x][y] === "" ||
                    (this.state.board[x][y] === "X" ? (
                      <img src={unicorn1} className="imgUni" alt="unicorn <3" />
                    ) : (
                      <img
                        src={unicorn2}
                        className="imgUni"
                        alt="an other unicorn <3"
                      />
                    ))}
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
