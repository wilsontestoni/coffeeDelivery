import { NewOrderFormData, PaymentMethod } from "../../pages/Checkout";
import { Coffee } from "../../pages/Home/components/CoffeeCard";
import { ActionTypes } from "./action";

interface PurchasedCoffee {
  coffee: Coffee;
  quantityPurchased: number;
}

interface Order {
  formData: NewOrderFormData;
  coffees: PurchasedCoffee[];
  paymentMethod: PaymentMethod;
}

export interface CartState {
  order: Order | null;
  cart: PurchasedCoffee[];
}

export function cartReducer(cartState: CartState, action: any): CartState {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE:
      const { coffee, quantityPurchased } = action.payload;
      console.log("cheguei no reducer");

      const existingCoffee = cartState.cart.find(
        (item) => item.coffee.id === coffee.id
      );

      if (existingCoffee) {
        return {
          ...cartState.cart,
          cart: cartState.cart.map((orderedCoffeeInfo) =>
            orderedCoffeeInfo.coffee.id === coffee.id
              ? {
                  ...orderedCoffeeInfo,
                  quantityPurchased:
                    orderedCoffeeInfo.quantityPurchased + quantityPurchased,
                }
              : orderedCoffeeInfo
          ),
        };
      }

      return {
        ...cartState.cart,
        cart: [...cartState.cart, { coffee, quantityPurchased }],
      };

    case ActionTypes.REMOVE_COFFEE_FROM_ORDER:
      const cartWithoutSelectedCoffee = cartState.cart.filter(
        (orderedCoffeeInfo) =>
          orderedCoffeeInfo.coffee.id !== action.payload.coffeeId
      );

      return {
        ...cartState,
        cart: cartWithoutSelectedCoffee,
      };

    case ActionTypes.INCREMENT_COFFEE_QUANTITY:
      const listWithCoffeeQuantityIncreasedUpdated = cartState.cart.map(
        (orderedCoffee) => {
          if (orderedCoffee.coffee.id === action.payload.coffeeId) {
            return {
              ...orderedCoffee,
              quantityPurchased: orderedCoffee.quantityPurchased + 1,
            };
          }
          return orderedCoffee;
        }
      );

      return {
        ...cartState,
        cart: listWithCoffeeQuantityIncreasedUpdated,
      };

    case ActionTypes.DECREMENT_COFFEE_QUANTITY:
      const listWithCoffeeQuantityDecreasedUpdated = cartState.cart.map(
        (orderedCoffee) => {
          if (orderedCoffee.coffee.id === action.payload.coffeeId) {
            if (orderedCoffee.quantityPurchased > 0) {
              return {
                ...orderedCoffee,
                quantityPurchased: orderedCoffee.quantityPurchased - 1,
              };
            }
          }
          return orderedCoffee;
        }
      );

      return {
        ...cartState,
        cart: listWithCoffeeQuantityDecreasedUpdated,
      };

    case ActionTypes.CREATE_NEW_ORDER:
      return {
        order: action.payload.order,
        cart: [],
      };

    default:
      return cartState;
  }
}
