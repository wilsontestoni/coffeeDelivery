import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-top: 5rem;
`;

export const OrderConfirmedContainer = styled.section`
  h1 {
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme["yellow-dark"]};

    margin-bottom: 4px;
  }

  > p {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-stretch: 100;

    margin-bottom: 2.5rem;
  }
`;

export const OrderInfoContainer = styled.div`
  width: 526px;
  padding: 40px;

  border: 1px solid ${(props) => props.theme["base-subtitle"]};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const BaseInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: ${(props) => props.theme["base-text"]};
`;

interface IconContainerProps {
  $variant: "purple" | "yellow" | "yellow-dark";
}
export const IconContainer = styled.span<IconContainerProps>`
  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1000px;

  background: ${(props) => props.theme[props.$variant]};
`;

export const ImgContainer = styled.div`
  align-self: flex-end;
  position: relative;

  > img {
    position: absolute;
    bottom: -14px;
    right: 0;
  }
`;
