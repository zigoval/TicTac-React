import React, { Component } from "react";
import { CommentDiv, ParaWin } from "../styles";

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
