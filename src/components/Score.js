import React, { Component } from "react";

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: "Player 1",
      player2: "Player 2"
    };
  }
  handleChange = e => {
    if (e.target.name === "player1") {
      this.setState({ player1: e.target.value });
    } else {
      this.setState({ player2: e.target.value });
    }
  };

  render() {
    const scoreP1 = this.props.scoreP1;
    const scoreP2 = this.props.scoreP2;
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>{this.state.player1}</td>
              <td>{this.state.player2}</td>
            </tr>
            <tr>
              <td>{scoreP1}</td>
              <td>{scoreP2}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={this.props.reset}>Rejouer</button>
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

export default Score;
