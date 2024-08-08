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

  width: ${(props) =>
    props.$variantWidth ? `${props.$variantWidth}px` : "100%"};

  padding: 12px;

  background: ${(props) => props.theme["base-input"]};
  border: none;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme["base-button"]};

  input {
    font-size: 14px;
    color: ${(props) => props.theme["base-text"]};
    width: 100%;
    background: ${(props) => props.theme["base-input"]};
    border: none;

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }

    &:-webkit-autofill {
      background-color: ${(props) => props.theme["base-input"]} !important;
      color: ${(props) => props.theme["base-text"]} !important;
      -webkit-text-fill-color: ${(props) =>
        props.theme["base-text"]} !important;
      -webkit-box-shadow: 0 0 0 30px ${(props) => props.theme["base-input"]}
        inset !important;
      box-shadow: 0 0 0 30px ${(props) => props.theme["base-input"]} inset !important;
    }
  }

  span {
    font-style: italic;
    font-size: 0.75rem;
    color: ${(props) => props.theme["base-label"]};
  }

  &:focus-within {
    border: 1px solid ${(props) => props.theme["yellow-dark"]};
  }
`;
