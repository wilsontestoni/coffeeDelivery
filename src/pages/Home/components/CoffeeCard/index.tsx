import {
  CartButton,
  CoffeeCardContainer,
  Footer,
  Form,
  PriceContainer,
  Tag,
  TagsContainer,
} from "./style";

import { ShoppingCart } from "@phosphor-icons/react";
import { CoffeeQuantityController } from "../../../../components/CoffeeQuantityController";
import { useState } from "react";
import { Coffee } from "../..";
import { useCart } from "../../../../context/CartContext";

interface CoffeeCard {
  coffee: Coffee;
}
export function CoffeeCard({ coffee }: CoffeeCard) {
  const { addCoffee } = useCart();

  const [coffeesQuantity, setCoffeesQuantity] = useState(1);

  function decrementCoffeeQuantity() {
    if (coffeesQuantity < 1) {
      return;
    }

    setCoffeesQuantity((prevQuantity) => prevQuantity - 1);
  }

  function incrementCoffeeQuantity() {
    setCoffeesQuantity((prevQuantity) => prevQuantity + 1);
  }

  function handlePurchaseCoffee(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    addCoffee(coffee, coffeesQuantity);
  }

  return (
    <CoffeeCardContainer>
      <img src={coffee.img} alt="" />
      <TagsContainer>
        {coffee.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsContainer>
      <h3>{coffee.title}</h3>
      <p>{coffee.description}</p>
      <Footer>
        <PriceContainer>
          R$ <span>{coffee.price}</span>
        </PriceContainer>

        <Form onSubmit={handlePurchaseCoffee}>
          <CoffeeQuantityController
            coffeesQuantity={coffeesQuantity}
            incrementQuantity={incrementCoffeeQuantity}
            decrementQuantity={decrementCoffeeQuantity}
          />

          <CartButton type="submit">
            <ShoppingCart size={22} weight="fill" color="#fff" />
          </CartButton>
        </Form>
      </Footer>
    </CoffeeCardContainer>
  );
}
