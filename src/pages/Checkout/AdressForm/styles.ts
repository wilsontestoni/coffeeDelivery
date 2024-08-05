import styled from "styled-components";

interface InputProps {
  $variantWidth?: "200";
}
export const Input = styled.input<InputProps>`
  display: block;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme["base-text"]};

  width: ${(props) =>
    props.$variantWidth ? `${props.$variantWidth}px` : "100%"};
  height: 42px;
  padding: 12px;

  background: ${(props) => props.theme["base-input"]};
  border: none;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme["base-button"]};

  &:focus {
    border: 1px solid ${(props) => props.theme["yellow-dark"]};
  }
`;