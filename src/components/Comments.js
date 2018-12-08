import React, { Component } from "react";
import styled from "styled-components";

const CommentDiv = styled.div`
  flex: 0.7;
  background-color: #f2f2f2;
  overflow: auto;
  height: 500px;
  padding: 25px;
`;
const ParaWin = styled.p`
  font-size: 16px;
  color: red;
`;

class Comments extends Component {
  render() {
    const { comments, winner } = this.props;
    const min = comments.length - 10 <= 0 ? 0 : comments.length - 10;
    return (
      <CommentDiv>
        <h2>Live-Comments :</h2>
        {comments
          .slice(min, comments.length)
          .map((comment, index) =>
            winner ? (
              <ParaWin key={index}>{comment}</ParaWin>
            ) : (
              <p key={index}>{comment}</p>
            )
          )}
      </CommentDiv>
    );
  }
}

export default Comments;
