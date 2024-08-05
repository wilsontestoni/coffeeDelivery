import { Trash } from "@phosphor-icons/react";
import { CoffeeQuantityController } from "../../../components/CoffeeQuantityController";
import {
  RemoveButton,
  SelectedCoffeeControllers,
  SelectedCoffeeContainer,
  Price,
} from "./styles";
import { Coffee } from "../../Home";

import { useCart } from "../../../context/CartContext";

interface SelectedCoffeeCardProps {
  coffee: Coffee;
  quantity: number;
}
export function SelectedCoffeeCard({
  coffee,
  quantity,
}: SelectedCoffeeCardProps) {
  const {
    removeCoffeFromOrder,
    incrementCoffeeQuantity,
    decrementCoffeeQuantity,
  } = useCart();

  function handleDeleteCoffee() {
    removeCoffeFromOrder(coffee.id);
  }

  return (
    <SelectedCoffeeContainer>
      <div>
        <img src={coffee.img} alt="" />
        <div>
          <h3>{coffee.title}</h3>
          <SelectedCoffeeControllers>
            <CoffeeQuantityController
              coffeesQuantity={quantity}
              incrementQuantity={() => incrementCoffeeQuantity(coffee.id)}
              decrementQuantity={() => decrementCoffeeQuantity(coffee.id)}
            />
            <RemoveButton onClick={handleDeleteCoffee} type="button">
              <Trash size={16} />
              Remover
            </RemoveButton>
          </SelectedCoffeeControllers>
        </div>
      </div>
      <Price>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(coffee.price)}
      </Price>
      
    </SelectedCoffeeContainer>
  );
}
