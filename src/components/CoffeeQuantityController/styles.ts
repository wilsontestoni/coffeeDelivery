import { styled } from "styled-components";

export const ControlsContainer = styled.div`
  width: 72px;

  padding: 0.5313rem 0.5rem;
  background: ${(props) => props.theme["base-button"]};
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;

  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.theme["base-title"]};
    text-align: center;
  }
`;

export const BaseButton = styled.button`
  border: none;
  background: ${(props) => props.theme["base-button"]};

  display: flex;
  color: ${(props) => props.theme.purple};

  transition: color 0.1s;
`;

export const Remove = styled(BaseButton)`
  &:hover {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;

export const Add = styled(BaseButton)`
  &:hover {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;
