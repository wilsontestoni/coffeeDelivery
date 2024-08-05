import { MapPin, Timer, CurrencyDollar } from "@phosphor-icons/react";
import deliveryGuyImg from "../../assets/delivery-guy.svg";
import {
  Main,
  OrderConfirmedContainer,
  OrderInfoContainer,
  ImgContainer,
  BaseInfoContainer,
  IconContainer,
} from "./styles";
import { useCart } from "../../context/CartContext";

export function Sucess() {
  const { order } = useCart();

  return (
    <Main>
      <OrderConfirmedContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <OrderInfoContainer>
          <BaseInfoContainer>
            <IconContainer $variant="purple">
              <MapPin weight="fill" size={16} color="white" />
            </IconContainer>
            <span>
              <p>
                Entrega em{" "}
                <strong>
                  {order?.formData.street}, {order?.formData.number}
                </strong>
              </p>
              <p>
                {order?.formData.neighborhood} - {order?.formData.city},{" "}
                {order?.formData.uf}
              </p>
            </span>
          </BaseInfoContainer>
          <BaseInfoContainer>
            <IconContainer $variant="yellow">
              <Timer weight="fill" size={16} color="white" />
            </IconContainer>
            <span>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </span>
          </BaseInfoContainer>
          <BaseInfoContainer>
            <IconContainer $variant="yellow-dark">
              <CurrencyDollar weight="fill" size={16} color="white" />
            </IconContainer>
            <span>
              <p>Pagamento na entrega</p>
              <strong>{order?.formData.paymentMethod}</strong>
            </span>
          </BaseInfoContainer>
        </OrderInfoContainer>
      </OrderConfirmedContainer>

      <ImgContainer>
        <img
          src={deliveryGuyImg}
          alt="Um homem indo fazer uma entrega de moto"
        />
      </ImgContainer>
    </Main>
  );
}
