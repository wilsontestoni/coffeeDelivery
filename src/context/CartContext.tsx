import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Coffee } from "../pages/Home";
import { NewOrderFormData } from "../pages/Checkout";

interface PurchasedCoffee {
  coffee: Coffee;
  quantityPurchased: number;
}

interface Order {
  formData: NewOrderFormData;
  coffees: PurchasedCoffee[];
}

interface CartContextProps {
  cart: PurchasedCoffee[];
  order: Order | null;
  newOrder: (formData: NewOrderFormData, paymentMethod: string) => void;
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
  const [cart, setCart] = useState<PurchasedCoffee[]>([]);
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("@coffee-delivery");
    if (data) {
      try {
        const convertedData: PurchasedCoffee[] = JSON.parse(data);
        setCart(convertedData);
      } catch {
        localStorage.removeItem("@coffee-delivery");
      }
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("@coffee-delivery", JSON.stringify(cart));
      return;
    }

    localStorage.removeItem("@coffee-delivery");
  }, [cart]);

  function addCoffee(coffee: Coffee, quantityPurchased: number) {
    setCart((prevCart) => {
      const existingCoffee = prevCart.find(
        (orderedCoffee) => orderedCoffee.coffee.id === coffee.id
      );

      if (existingCoffee) {
        return prevCart.map((orderedCoffee) =>
          orderedCoffee.coffee.id === coffee.id
            ? {
                ...orderedCoffee,
                quantityPurchased:
                  orderedCoffee.quantityPurchased + quantityPurchased,
              }
            : orderedCoffee
        );
      } else {
        return [...prevCart, { coffee, quantityPurchased }];
      }
    });
  }

  function removeCoffeFromOrder(coffeeId: string) {
    const orderWithoutSelectedCoffee = cart.filter(
      (orderedCoffeeInfo) => orderedCoffeeInfo.coffee.id !== coffeeId
    );

    setCart(orderWithoutSelectedCoffee);
  }

  function incrementCoffeeQuantity(coffeeId: string) {
    setCart((prevCart) => {
      return prevCart.map((orderedCoffee) => {
        if (orderedCoffee.coffee.id === coffeeId) {
          return {
            ...orderedCoffee,
            quantityPurchased: orderedCoffee.quantityPurchased + 1,
          };
        }
        return orderedCoffee;
      });
    });
  }

  function decrementCoffeeQuantity(coffeeId: string) {
    setCart((prevCart) => {
      return prevCart.map((orderedCoffee) => {
        if (
          orderedCoffee.coffee.id === coffeeId &&
          orderedCoffee.quantityPurchased > 1
        ) {
          return {
            ...orderedCoffee,
            quantityPurchased: orderedCoffee.quantityPurchased - 1,
          };
        } else {
          return orderedCoffee;
        }
      });
    });
  }

  function newOrder(formData: NewOrderFormData, paymentMethod: string) {
    Object.assign(formData, { paymentMethod });

    const completeOrder = {
      formData,
      coffees: cart,
    };

    setOrder(completeOrder);
    setCart([]);
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
