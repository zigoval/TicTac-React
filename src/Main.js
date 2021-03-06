import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table";
import Headers from "./components/Header";
import Comments from "./components/Comments";
import CommentInGame, {
  CommentEndOfGame,
  CommentsOnDraw
} from "./constants/Comments";
import Footer from "./components/Footer";
import { Body, Container } from "../src/styles";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: ["Welcome in this new game"],
      winner: null,
      player1: "player1",
      player2: "player2"
    };
  }
  setPlayerName = (p1, p2) => {
    if (p1 !== this.state.player1 || p2 !== this.state.player2) {
      this.setState({
        player1: p1,
        player2: p2
      });
    }
  };

  commentOnClick = winner => {
    const comments = this.state.comments;

    const sizeOfCommentInGame = Math.floor(
      Math.random() * CommentInGame.length
    );
    const sizeOfCommentEnd = Math.floor(
      Math.random() * CommentEndOfGame.length
    );
    const sizeOnDraw = Math.floor(Math.random() * CommentsOnDraw.length);

    if (winner === "X" || winner === "O") {
      comments.push(CommentEndOfGame[sizeOfCommentEnd]);
    } else if (winner === "XO") {
      comments.push(CommentsOnDraw[sizeOnDraw]);
    } else {
      comments.push(CommentInGame[sizeOfCommentInGame]);
    }
    this.setState({ comments: comments, winner: winner });
  };
  render() {
    const data = this.state;

    return (
      <Container>
        <Headers data={data} />
        <Body>
          <Comments comments={data.comments} winner={data.winner} />
          <Table
            commentOnClick={this.commentOnClick}
            setPlayerName={this.setPlayerName}
          />
        </Body>
        <Footer reset={this.reset} />
      </Container>
    );
  }
}

export default Main;
