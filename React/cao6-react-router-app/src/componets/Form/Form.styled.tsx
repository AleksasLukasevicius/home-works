import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;

  label,
  button {
    margin-top: 1rem;
  }
  input {
    margin-top: 0.5rem;
  }

  input {
    text-align: center;
    padding: 0 1rem;
    border: none;
    border-bottom: 2px solid black;
  }
`;
