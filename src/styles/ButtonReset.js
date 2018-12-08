import styled from "styled-components";

const ButtonReset = styled.button`
  color: ${props => (props.winner ? "#FFF" : "")};
  background-color: ${props => (props.winner ? "blue" : "")};
  font-size: ${props => (props.winner ? "16px" : "")};
  text-transform: ${props => (props.winner ? "uppercase" : "")};
  border-radius: ${props => (props.winner ? "15%" : "")};
`;
export default ButtonReset;
