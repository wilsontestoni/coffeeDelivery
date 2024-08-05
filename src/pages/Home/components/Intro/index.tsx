import { ShoppingCart, Timer, Package, Coffee } from "@phosphor-icons/react";
import {
  IconContainer,
  IntroContainer,
  IntroContentContainer,
  IntroList,
} from "./styles";
import coffeeImg from "../../../../assets/logo-coffe.svg";

export function Intro() {
  return (
    <IntroContainer>
      <IntroContentContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <IntroList>
          <li>
            <IconContainer $variant="yellow-dark">
              <ShoppingCart weight="fill" size={16} color="white" />
            </IconContainer>
            Compra simples e segura
          </li>
          <li>
            <IconContainer $variant="base-text">
              <Package weight="fill" size={16} color="white" />
            </IconContainer>
            Embalagem mantém o café intacto
          </li>
          <li>
            <IconContainer $variant="yellow">
              <Timer weight="fill" size={16} color="white" />
            </IconContainer>
            Entrega rápida e rastreada
          </li>
          <li>
            <IconContainer $variant="purple">
              <Coffee weight="fill" size={16} color="white" />
            </IconContainer>
            O café chega fresquinho até você
          </li>
        </IntroList>
      </IntroContentContainer>
      <img src={coffeeImg} alt="Copo de café, com grãos de café ao fundo" />
    </IntroContainer>
  );
}
