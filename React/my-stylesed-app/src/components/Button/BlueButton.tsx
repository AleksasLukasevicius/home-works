import React from "react";
import styled from "styled-components";

export const BlueButton = () => {
  const StyledButton = styled.div`
    margin-left: 500px;
    width: 100px;
    border: 10px solid yellow;
    padding: 10px;
    background-color: blue;
  `;

  const ButtonText = styled.p`
    color: yellow;
  `;
  return (
    <StyledButton>
      <ButtonText>Text Button</ButtonText>
    </StyledButton>
  );
};
