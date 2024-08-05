import styled from "styled-components";

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 2rem;
  border-bottom: 2px solid ${(props) => props.theme["base-button"]};

  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: 400;

    margin-bottom: 8px;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 20px;

    img {
      width: 64px;
      height: 64px;
    }
  }
`;

export const SelectedCoffeeControllers = styled.div`
  height: 32px;
  display: flex;
  gap: 8px;
`;

export const RemoveButton = styled.button`
  font-size: 0.75rem;
  line-height: 1;
  color: ${(props) => props.theme["base-text"]};
  text-transform: uppercase;
  background: ${(props) => props.theme["base-button"]};
  padding: 0.5rem;
  border: none;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background-color 0.1s;

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`;

export const Price = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  color: ${(props) => props.theme["base-text"]};
  line-height: 1.7;
`;
