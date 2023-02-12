import styled from "styled-components";

export const OrangeButton = styled.button`
  height: 2rem;
  background: orange;
  border-radius: 0.25rem;
  border: 1px solid orange;
  color: white;
  padding: 0 1rem;
  margin-left: 0.5rem;
  text-transform: uppercase;
  font-size: x-small;
  font-weight: bold;
`;

export const WhiteButton = styled(OrangeButton)`
  background: transparent;
  color: orange;
`;
