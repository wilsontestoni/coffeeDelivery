import { Minus, Plus } from "@phosphor-icons/react";
import { ControlsContainer, Remove, Add } from "./styles";

interface CoffeeQuantityControllerProps {
  coffeesQuantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
}

export function CoffeeQuantityController({
  coffeesQuantity,
  decrementQuantity,
  incrementQuantity,
}: CoffeeQuantityControllerProps) {
  function handleRemoveCoffee() {
    decrementQuantity();
  }

  function handleAddCoffee() {
    incrementQuantity();
  }

  return (
    <ControlsContainer>
      <Remove type="button" onClick={handleRemoveCoffee}>
        <Minus size={14} weight="bold" />
      </Remove>
      <span>{coffeesQuantity}</span>
      <Add type="button" onClick={handleAddCoffee}>
        <Plus size={14} weight="bold" />
      </Add>
    </ControlsContainer>
  );
}
