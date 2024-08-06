import { Coffee } from "../../pages/Home/components/CoffeeCard"; 

export enum ActionTypes {
  ADD_NEW_COFFEE = "ADD_NEW_COFFEE",
  REMOVE_COFFEE_FROM_ORDER = "REMOVE_COFFEE_FROM_ORDER",
  INCREMENT_COFFEE_QUANTITY = "INCREMENT_COFFEE_QUANTITY",
  DECREMENT_COFFEE_QUANTITY = "DECREMENT_COFFEE_QUANTITY",
  CREATE_NEW_ORDER = "CREATE_NEW_ORDER",
}

export function addNewCoffeeAction(coffee: Coffee, quantityPurchased: number) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      coffee,
      quantityPurchased,
    },
  };
}

export function removeCoffeFromOrderAction(coffeeId: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE_FROM_ORDER,
    payload: {
      coffeeId,
    },
  };
}

export function incrementCoffeeQuantityAction(coffeeId: string) {
  return {
    type: ActionTypes.INCREMENT_COFFEE_QUANTITY,
    payload: {
      coffeeId,
    },
  };
}

export function decrementCoffeeQuantityAction(coffeeId: string) {
  return {
    type: ActionTypes.DECREMENT_COFFEE_QUANTITY,
    payload: {
      coffeeId,
    },
  };
}

export function newOrderAction(order: any) {
  return {
    type: ActionTypes.CREATE_NEW_ORDER,
    payload: {
      order,
    },
  };
}
