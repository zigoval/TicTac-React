import React, { Component } from "react";
import styled from "styled-components";

const ButtonReset = styled.button`
  color: ${props => (props.winner ? "#FFF" : "")};
  background-color: ${props => (props.winner ? "blue" : "")};
  font-size: ${props => (props.winner ? "16px" : "")};
  text-transform: ${props => (props.winner ? "uppercase" : "")};
  border-radius: ${props => (props.winner ? "15%" : "")};
`;
const Form = styled.form`
  & input {
    max-width: 100px;
    margin: 10px;
  }
`;

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: "Player 1",
      player2: "Player 2"
    };
    this.setPlayerOneName.bind(this);
  }

  setPlayerOneName = e => {
    this.setState({ player1: e.target.value });
  };
  setPlayerTwoName = e => {
    this.setState({ player2: e.target.value });
  };

  handleOnClick = event => {
    this.props.setPlayerName(this.state.player1, this.state.player2);
  };

  render() {
    const { scoreP1, scoreP2, winner } = this.props.data;
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
        <ButtonReset onClick={this.props.reset} winner={winner}>
          Rejouer
        </ButtonReset>
        <div>
          <Form>
            <label>Joueur 1 : </label>
            <input
              type="text"
              name="player1"
              onChange={this.setPlayerOneName}
            />
            <label>Joueur 2 : </label>
            <input
              type="text"
              name="player2"
              onChange={this.setPlayerTwoName}
            />
            <input type="button" value="Valider" onClick={this.handleOnClick} />
          </Form>
        </div>
      </div>
    );
  }
}

export default Score;
