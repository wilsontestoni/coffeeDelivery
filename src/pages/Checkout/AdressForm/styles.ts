import styled from "styled-components";

interface InputProps {
  $variantWidth?: "200";
}
export const InputContainer = styled.div<InputProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;

  font-family: "Roboto";
  font-style: normal;
  font-size: 14px;
  width: ${(props) =>
    props.$variantWidth ? `${props.$variantWidth}px` : "100%"};
  height: 42px;
  padding: 12px;

  background: ${(props) => props.theme["base-input"]};
  border: none;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme["base-button"]};

  input {
    color: ${(props) => props.theme["base-text"]};
    width: 100%;
    background: transparent;
    border: none;
  }

  span {
    color: ${(props) => props.theme["base-label"]};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme["yellow-dark"]};
  }
`;
