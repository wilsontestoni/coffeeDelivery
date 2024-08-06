import {
  CartButton,
  CoffeeCardContainer,
  Footer,
  Form,
  PriceContainer,
  Tag,
  TagsContainer,
} from "./style";

import { ShoppingCart, Check } from "@phosphor-icons/react";
import { CoffeeQuantityController } from "../../../../components/CoffeeQuantityController";
import { useState } from "react";
import { useCart } from "../../../../context/CartContext";

type Tag = string;
export interface Coffee {
  id: string;
  img: string;
  tags: Tag[];
  title: string;
  description: string;
  price: number;
}
interface CoffeeCard {
  coffee: Coffee;
}
export function CoffeeCard({ coffee }: CoffeeCard) {
  const { addCoffee } = useCart();

  const [coffePurchasedSubmited, setCoffePurchasedSubmited] = useState(false);
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

    if (coffePurchasedSubmited) {
      return;
    }

    setCoffePurchasedSubmited(true);

    addCoffee(coffee, coffeesQuantity);
    setTimeout(() => {
      setCoffePurchasedSubmited(false);
    }, 1500);
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
            {coffePurchasedSubmited ? (
              <Check size={22} weight="bold" color="#fff" />
            ) : (
              <ShoppingCart size={22} weight="fill" color="#fff" />
            )}
          </CartButton>
        </Form>
      </Footer>
    </CoffeeCardContainer>
  );
}
