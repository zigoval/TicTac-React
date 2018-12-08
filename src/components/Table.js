import React, { Component } from "react";
import TicTac from "./TicTac";
import Score from "./Score";
import TableDiv from "../styles/TableDiv";

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

  didWin = emptyCaseLeft => {
    const s = this.state.p1TurnYouOn ? "X" : "O";
    const board = this.state.board;
    let isWinning = null;
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
    } else if (isWinning === "O") {
      this.setState(state => ({
        scoreP2: state.scoreP2 + 1,
        winner: true
      }));
    } else if (emptyCaseLeft === 0) {
      isWinning = "XO";
    }
    this.setState({
      p1TurnYouOn: !this.state.p1TurnYouOn
    });
    this.props.commentOnClick(isWinning);
  };

  handleclick = (x, y) => () => {
    if (this.state.winner) return;
    const board = this.state.board;
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
    let nbCaseDiff = 0;
    let emptyCaseLeft = 0;
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] !== newBoard[i][j]) {
          nbCaseDiff++;
        }
        if (newBoard[i][j] === "") {
          emptyCaseLeft++;
        }
      }
    }
    if (nbCaseDiff > 0) {
      this.setState(
        {
          board: newBoard
        },
        () => this.didWin(emptyCaseLeft)
      );
    }
  };
  render() {
    const state = this.state;

    return (
      <TableDiv>
        <TicTac board={state.board} onHandleClick={this.handleclick} />
        <Score
          reset={this.resetGame}
          data={state}
          setPlayerName={this.props.setPlayerName}
        />
      </TableDiv>
    );
  }
}

export default Table;
