import styled from "styled-components";

const TableDiv = styled.div`
  flex: 1;
  padding: 25px;
  text-align: center;
  width: 100%;
  & > div > table {
    width: 500px;
    padding: 15px;
    margin: auto;
    & td {
      width: 250px;
    }
  }
  & button {
    margin: 5px;
  }
`;

export default TableDiv;
