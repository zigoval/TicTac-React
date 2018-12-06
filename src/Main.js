import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table";
import Headers from "./components/Header";
import Comments from "./components/Comments";
import CommentInGame, {
  CommentEndOfGame,
  CommentsOnDraw
} from "./constants/Comments";
import styled from "styled-components";
import Footer from "./components/Footer";

const Body = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 10px;
  padding-bottom: 160px;
`;
const Container = styled.div`
  height: 100%;
  position: relative;
`;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: ["Welcome in this new game"],
      winner: null
    };
  }

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
    console.log(comments);
    this.setState({ comments: comments, winner: winner });
  };
  render() {
    const data = this.state;
    return (
      <Container>
        <Headers />
        <Body>
          <Comments comments={data.comments} winner={data.winner} />
          <Table commentOnClick={this.commentOnClick} />
        </Body>
        <Footer reset={this.reset} />
      </Container>
    );
  }
}

export default Main;
