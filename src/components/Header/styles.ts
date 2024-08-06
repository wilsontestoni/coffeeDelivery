import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2.25rem 0;
`;

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const LocationSpan = styled.span`
  border-radius: 6px;
  padding: 8px;
  background: ${(props) => props.theme["purple-light"]};

  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  color: ${(props) => props.theme["purple-dark"]};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  svg {
    fill: ${(props) => props.theme["purple"]};
  }
`;

export const CartLink = styled(Link)`
  height: 38px;
  width: 38px;

  position: relative;
  padding: 0.5rem;
  background: ${(props) => props.theme["yellow-light"]};

  border-radius: 6px;

  span {
    height: 20px;
    width: 20px;

    position: absolute;

    top: -10px;
    right: -10px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 100px;

    font-family: "Roboto";
    font-size: 12px;
    font-weight: bold;

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme["yellow-dark"]};
  }

  svg {
    fill: ${(props) => props.theme["yellow-dark"]};
  }

  &:hover {
    transition: filter 0.1s;
    filter: brightness(1.05);
  }
`;
