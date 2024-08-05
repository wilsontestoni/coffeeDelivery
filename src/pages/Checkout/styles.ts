import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 448px;
  grid-template-rows: 410px 1fr;
  column-gap: 2rem;
  row-gap: 0.75rem;

  margin-top: 2.4375rem;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: ${(props) => props.theme["base-subtitle"]};

    margin-bottom: 0.9375rem;
  }
`;

export const BaseContainer = styled.div`
  background: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px;
`;

export const AdressContainer = styled(BaseContainer)``;

export const AdressInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div:nth-child(3) {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 12px;
  }

  > div:nth-child(4) {
    display: grid;
    grid-template-columns: 200px 276px 60px;
    gap: 12px;
  }
`;

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 22px 1fr;
  gap: 0.5rem;
  margin-bottom: 2rem;

  font-style: normal;
  font-weight: 400;

  svg {
    margin-bottom: 1px;
  }

  h2 {
    font-size: 1rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: 400;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
  }
`;

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

export const PaymentContainer = styled(BaseContainer)`
  grid-column: 1;
  grid-row: 2;
`;

export const PaymentsButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

interface PaymentButtonProps {
  $selected: boolean;
}
export const PaymentButton = styled.button<PaymentButtonProps>`
  width: 100%;
  height: 51px;
  padding: 16px;

  border: 1px solid transparent;
  border-color: ${(props) => props.$selected && `${props.theme["purple"]}`};

  font-family: "Roboto";
  font-size: 0.75rem;

  color: ${(props) => props.theme["base-text"]};
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 11px;

  background: ${(props) => props.theme["base-button"]};
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme["purple"]};
  }

  transition: background-color 0.1s;

  &:hover:not(:focus) {
    background: ${(props) => props.theme["base-hover"]};
  }
`;

export const SelectedCoffeeContainer = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  border-radius: 6px 44px;
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ResultsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  color: ${(props) => props.theme["base-text"]};

  span:nth-child(2) {
    font-size: 1rem;
  }

  strong {
    font-weight: 700;
    font-size: 1.25rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px 8px;

  font-size: 0.875rem;
  font-family: "Roboto";
  font-weight: 700;
  color: ${(props) => props.theme.white};
  text-transform: uppercase;

  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme.yellow};
  transition: background-color 0.1s;

  &:hover {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`;
