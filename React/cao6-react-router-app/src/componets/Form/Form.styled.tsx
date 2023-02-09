import styled from "styled-components";

export const Form = styled.form`
  max-width: 25rem;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label,
  button {
    margin-top: 1rem;
  }

  label {
    font-size: 2rem;
    font-weight: bold;
    text-align: left;
  }

  input {
    box-sizing: border-box;
    width: 100%;
    padding: 0.5rem 0;
    font-size: 1.5rem;
    border: 0;
    border-bottom: 0.125rem solid rgb(0, 0, 0);
  }

  input::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }

  input:focus {
    border-color: rgba(0, 0, 0, 0.5);
    transition: border-color 1s;
    outline: 0;
  }
`;
