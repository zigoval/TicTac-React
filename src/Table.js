import React, { Component } from "react";
import Score from "./Score";
import TicTac from "./TicTac";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreP1: 0,
      scoreP2: 0,
      winner: null,
      p1TurnYouOn: true,
      board: [["", "", ""], ["", "", ""], ["", "", ""]],
      InitialBoard: [["", "", ""], ["", "", ""], ["", "", ""]]
    };
    this.handleclick.bind(this);
    this.didWin.bind(this);
  }

  resetGame = () => {
    this.setState({
      board: this.state.InitialBoard,
      p1TurnYouOn: true,
      winner: null
    });
  };

  didWin = () => {
    console.log(this.state.p1TurnYouOn);
    console.log(this.state.board);
    const s = this.state.p1TurnYouOn ? "X" : "O";
    const board = this.state.board;
    let isWinning = null;
    this.setState({ p1TurnYouOn: !this.state.p1TurnYouOn });

    for (let i = 0; i < 3; i++) {
      if (board[i][0] === s && board[i][1] === s && board[i][2] === s) {
        isWinning = s;
      }
    }
    for (let i = 0; i < 3; i++) {
      if (board[0][i] === s && board[1][i] === s && board[2][i] === s) {
        isWinning = s;
      }
    }
    if (board[0][0] === s && board[1][1] === s && board[2][2] === s) {
      isWinning = s;
    }
    if (board[0][2] === s && board[1][1] === s && board[2][0] === s) {
      isWinning = s;
    }

    if (isWinning === "X") {
      this.setState(state => ({
        scoreP1: state.scoreP1 + 1,
        winner: true
      }));
      return true;
    } else if (isWinning === "O") {
      this.setState(state => ({
        scoreP2: state.scoreP2 + 1,
        winner: true
      }));
      return true;
    } else {
      return false;
    }
  };

  handleclick = (x, y) => () => {
    if (this.state.winner) return;
    const newBoard = this.state.board.map((row, rx) =>
      row.map((cell, cy) =>
        x === rx && y === cy
          ? cell === ""
            ? this.state.p1TurnYouOn
              ? "X"
              : "O"
            : cell
          : cell
      )
    );
    this.setState(
      {
        board: newBoard
      },
      () => this.didWin()
    );
  };
  render() {
    const board = this.state.board;
    const scoreP1 = this.state.scoreP1;
    const scoreP2 = this.state.scoreP2;

    return (
      <div>
        <TicTac board={board} onHandleClick={this.handleclick} />
        <Score scoreP1={scoreP1} scoreP2={scoreP2} reset={this.resetGame} />
      </div>
    );
  }
}

export default Table;
