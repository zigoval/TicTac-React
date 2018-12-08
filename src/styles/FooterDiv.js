import styled from "styled-components";

const FooterDiv = styled.div`
  background-color: #f7b4ee;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px; /* Height of the footer */
  & ul {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
  }
`;

export default FooterDiv;
