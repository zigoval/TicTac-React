import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table";
import Headers from "./components/Header";
import Comments from "./components/Comments";
import CommentInGame from "./constants/Comments";
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
      comments: ["Welcome in this new game"]
    };
    this.reset.bind(this);
  }
  reset = () => {
    console.log("Main");
  };

  commentOnClick = () => {
    const comments = this.state.comments;
    console.log(comments);

    const number = Math.floor(Math.random() * CommentInGame.length);
    comments.push(CommentInGame[number]);
    this.setState({ comments: comments });
  };
  render() {
    const comments = this.state.comments;
    return (
      <Container>
        <Headers />
        <Body>
          <Comments comments={comments} />
          <Table commentOnClick={this.commentOnClick} />
        </Body>
        <Footer reset={this.reset} />
      </Container>
    );
  }
}

export default Main;
