import { styled } from "styled-components";

export const CoffeeList = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 32px;
  row-gap: 40px;
`;

export const CoffeeSection = styled.section`
  h2 {
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme["base-subtitle"]};

    margin-bottom: 3.375rem;
  }
`;
