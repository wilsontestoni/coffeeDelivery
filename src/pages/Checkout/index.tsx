import { useState } from "react";
import { useCart } from "../../context/CartContext";
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from "@phosphor-icons/react";
import {
  AdressContainer,
  Button,
  FormContainer,
  HeaderContainer,
  PaymentButton,
  PaymentContainer,
  PaymentsButtonsContainer,
  ResultsContainer,
  ResultsWrapper,
  SelectedCoffeeContainer,
} from "./styles";
import { SelectedCoffeeCard } from "./SelectedCoffeeCard";
import { useForm, FormProvider } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { AdressForm } from "./AdressForm";

const newOrderValidationSchema = zod.object({
  cep: zod.string(),
  street: zod.string(),
  number: zod.string(),
  complement: zod.string().nullable(),
  neighborhood: zod.string(),
  city: zod.string(),
  uf: zod.string(),

  paymentMethod: zod.enum([
    "Cartão de Crédito",
    "Cartão de Débito",
    "Dinheiro",
  ]),
});

// export type PaymentMethod =
//   | "Cartão de Crédito"
//   | "Cartão de Débito"
//   | "Dinheiro";

export type NewOrderFormData = zod.infer<typeof newOrderValidationSchema>;

export function Checkout() {
  const navigate = useNavigate();

  const { cart, newOrder } = useCart();

  const orderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderValidationSchema),
  });

  const { handleSubmit, register } = orderForm;

  const [paymentMethod, setPaymentMethod] = useState("Cartão de Crédito");

  const deliveryFee = 3.5;

  const coffeesTotalPrice = cart.reduce((acc, currentValue) => {
    const coffeePrice = currentValue.coffee.price;
    const numberOfCofeePurchased = currentValue.quantityPurchased;
    return acc + coffeePrice * numberOfCofeePurchased;
  }, 0);

  const orderTotalPrice = coffeesTotalPrice + deliveryFee;

  function handleSelectedPayment(e: any) {
    const selectedPayment = e.target.value;
    console.log(selectedPayment);
    setPaymentMethod(selectedPayment);
  }

  function handleConfirmNewOrder(data: NewOrderFormData) {
    console.log(data);
    if (cart.length === 0) {
      alert("É preciso ter items no carrinho para finalizar o pedido!");
      return;
    }

    console.log(data)

    newOrder({ ...data });

    navigate("/sucess");
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleConfirmNewOrder)}>
      <div>
        <h1>Complete seu pedido</h1>
        <AdressContainer>
          <HeaderContainer>
            <MapPinLine size={22} color="#C47F17" />
            <div>
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </HeaderContainer>

          <FormProvider {...orderForm}>
            <AdressForm />
          </FormProvider>
        </AdressContainer>
      </div>

      <PaymentContainer>
        <HeaderContainer>
          <CurrencyDollar size={22} color="8047F8" />
          <div>
            <h2>Endereço de Entrega</h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </HeaderContainer>

        <PaymentsButtonsContainer>
          <PaymentButton $selected={"Cartão de Crédito" === paymentMethod}>
            <input
              type="radio"
              {...register("paymentMethod")}
              value="Cartão de Crédito"
              onClick={handleSelectedPayment}
            />
            <CreditCard size={16} />
            Cartão de Crédito
          </PaymentButton>
          <PaymentButton $selected={"Cartão de Débito" === paymentMethod}>
            <input
              type="radio"
              {...register("paymentMethod")}
              value="Cartão de Débito"
              onClick={handleSelectedPayment}
            />
            <Bank size={16} />
            Cartão de Débito
          </PaymentButton>

          <PaymentButton $selected={"Dinheiro" === paymentMethod}>
            <input
              type="radio"
              {...register("paymentMethod")}
              value="Dinheiro"
              onClick={handleSelectedPayment}
            />
            <Money size={16} />
            Dinheiro
          </PaymentButton>
        </PaymentsButtonsContainer>
      </PaymentContainer>

      <div>
        <h1>Cafés selecionados</h1>
        <SelectedCoffeeContainer>
          {cart.map((orderedCoffeeInfo) => (
            <SelectedCoffeeCard
              key={orderedCoffeeInfo.coffee.id}
              coffee={orderedCoffeeInfo.coffee}
              quantity={orderedCoffeeInfo.quantityPurchased}
            />
          ))}

          <ResultsContainer>
            <ResultsWrapper>
              <span>Total de itens</span>
              <span>
                {new Intl.NumberFormat("pt-br", {
                  currency: "BRL",
                  style: "currency",
                }).format(coffeesTotalPrice)}
              </span>
            </ResultsWrapper>
            <ResultsWrapper>
              <span>Entrega</span>
              <span>{deliveryFee.toFixed(2)}</span>
            </ResultsWrapper>
            <ResultsWrapper>
              <span>
                <strong>Total</strong>
              </span>
              <span>
                <strong>
                  {new Intl.NumberFormat("pt-br", {
                    currency: "BRL",
                    style: "currency",
                  }).format(orderTotalPrice)}
                </strong>
              </span>
            </ResultsWrapper>
          </ResultsContainer>
          <Button type="submit">Confirmar pedido</Button>
        </SelectedCoffeeContainer>
      </div>
    </FormContainer>
  );
}
