import styled from "styled-components";

export const IntroContainer = styled.section`
  width: 100%;
  margin: 5.875rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IntroContentContainer = styled.div`
  width: 36.75rem;

  h1 {
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    color: ${(props) => props.theme["base-title"]};
    margin-bottom: 1rem;
  }

  p {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 4.125rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const IntroList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 14.4375rem 1fr;

  gap: 1.25rem;
  column-gap: 2.5rem;

  li {
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme["base-text"]};

    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

interface IconContainerProps {
  $variant: "yellow-dark" | "yellow" | "base-text" | "purple";
}

export const IconContainer = styled.span<IconContainerProps>`
  width: 32px;
  height: 32px;
  padding: 8px;

  background: ${(props) => props.theme[props.$variant]};
  border-radius: 50%;
`;
