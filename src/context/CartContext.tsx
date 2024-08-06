import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";
import { NewOrderFormData, PaymentMethod } from "../pages/Checkout";
import { cartReducer, CartState } from "../reducers/cart/reducer";
import {
  addNewCoffeeAction,
  removeCoffeFromOrderAction,
  incrementCoffeeQuantityAction,
  decrementCoffeeQuantityAction,
  newOrderAction,
} from "../reducers/cart/action";

interface PurchasedCoffee {
  coffee: Coffee;
  quantityPurchased: number;
}

interface Order {
  formData: NewOrderFormData;
  coffees: PurchasedCoffee[];
  paymentMethod: PaymentMethod;
}

interface CartContextProps {
  cart: PurchasedCoffee[];
  order?: Order | null;
  newOrder: (formData: NewOrderFormData, paymentMethod: PaymentMethod) => void;
  addCoffee: (coffee: Coffee, quantityPurchased: number) => void;
  removeCoffeFromOrder: (coffeeId: string) => void;
  incrementCoffeeQuantity: (coffeeId: string) => void;
  decrementCoffeeQuantity: (coffeeId: string) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContext = createContext({} as CartContextProps);

function CartContextProvider({ children }: CartContextProviderProps) {
  const initialState: CartState = {
    cart: [],
    order: null,
  };

  const [cartState, dispatch] = useReducer(
    cartReducer,
    initialState,
    (initialState) => {
      const storedCoffeState = localStorage.getItem("@coffee-delivery");

      if (storedCoffeState) {
        try {
          const parsedState = JSON.parse(storedCoffeState);
          return {
            cart: parsedState.cart || [],
            order: parsedState.order || null,
          };
        } catch {
          localStorage.removeItem("@coffee-delivery");
        }
      }

      return initialState;
    }
  );

  const { cart, order } = cartState;

  useEffect(() => {
    const stateToStore = { cart, order };

    if (cart.length > 0) {
      localStorage.setItem("@coffee-delivery", JSON.stringify(stateToStore));
      return;
    }

    localStorage.removeItem("@coffee-delivery");
  }, [cart, order]);

  function addCoffee(coffee: Coffee, quantityPurchased: number) {
    dispatch(addNewCoffeeAction(coffee, quantityPurchased));
  }

  function removeCoffeFromOrder(coffeeId: string) {
    dispatch(removeCoffeFromOrderAction(coffeeId));
  }

  function incrementCoffeeQuantity(coffeeId: string) {
    dispatch(incrementCoffeeQuantityAction(coffeeId));
  }

  function decrementCoffeeQuantity(coffeeId: string) {
    dispatch(decrementCoffeeQuantityAction(coffeeId));
  }

  function newOrder(formData: NewOrderFormData, paymentMethod: PaymentMethod) {
    const completeOrder: Order = {
      formData,
      coffees: cart,
      paymentMethod,
    };

    dispatch(newOrderAction(completeOrder));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        order,
        newOrder,
        addCoffee,
        removeCoffeFromOrder,
        incrementCoffeeQuantity,
        decrementCoffeeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  return context;
}

export { CartContextProvider, useCart };
