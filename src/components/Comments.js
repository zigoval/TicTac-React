import React, { Component } from "react";
import styled from "styled-components";

const CommentDiv = styled.div`
  flex: 1;
  padding: 25px;
  margin: 25px;
  background-color: #f2f2f2;
  overflow: auto;
  height: 500px;
`;

class Comments extends Component {
  render() {
    const p1 = "player1";
    const p2 = "player2";
    const comments = this.props.comments;
    return (
      <CommentDiv>
        <h2>Live-Comments :</h2>
        {comments.map(comment => (
          <p>{comment}</p>
        ))}
      </CommentDiv>
    );
  }
}

export default Comments;
