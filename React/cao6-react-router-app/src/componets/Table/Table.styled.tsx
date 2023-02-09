import styled from "styled-components";

export const TableContainer = styled.table`
  border-collapse: collapse;
  margin: 1rem auto;
  width: 75%;
  background-color: lightgrey;

  td {
    padding-top: 6px;
    padding-bottom: 6px;
  }

  th {
    font-size: 1.5rem;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: black;
    color: #61dafb;
  }

  tbody > tr:nth-child(odd) {
    background-color: grey;
  }

  tbody > tr:hover {
    background-color: #61dafb;
  }
`;
