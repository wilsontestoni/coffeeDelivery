import styled from "styled-components";

export const CoffeeCardContainer = styled.li`
  padding: 0 1.25rem 1.25rem 1.25rem;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: -1.25rem;
  }

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};

    margin-bottom: 0.5rem;
  }

  > p {
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-label"]};
    text-align: center;

    margin-bottom: 2.0625rem;
  }
`;

export const TagsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const Tag = styled.strong`
  font-size: 0.625rem;
  font-family: "Roboto";
  font-weight: 800;

  color: ${(props) => props.theme["yellow-dark"]};
  text-transform: uppercase;

  background: ${(props) => props.theme["yellow-light"]};

  border-radius: 100px;
  padding: 4px 8px;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 1.375rem;
`;

export const PriceContainer = styled.span`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  text-align: right;

  color: ${(props) => props.theme["base-text"]};

  span {
    font-size: 1.5rem;
    font-weight: bolder;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CartButton = styled.button`
  width: 38px;
  height: 38px;

  padding: 0.5rem;

  border: none;
  border-radius: 6px;

  background: ${(props) => props.theme["purple-dark"]};
  transition: background-color 0.1s;

  &:hover {
    background: ${(props) => props.theme["purple"]};
  }
`;
