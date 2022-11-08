import { createContext, ReactNode, useState } from "react";
import { produce } from "immer";

interface ShoppingContextProviderProps {
  children: ReactNode;
}

export interface CoffeeAttributes {
  id: Date;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

interface ShoppingContextType {
  shoppingList: CoffeeAttributes[];
  addCoffeeToCart: (coffeeToAdd: CoffeeAttributes) => void;
  changeCartItemQuantity: (cartItemName: string, type: "increase" | "decrease") => void;
  removeCartItem: (cartItemName: string) => void;
}

export const ShoppingContext = createContext({} as ShoppingContextType);

export function ShoppingContextProvider({ children }: ShoppingContextProviderProps) {
  const [shoppingList, setShoppingList] = useState<CoffeeAttributes[]>([]);

  function addCoffeeToCart(coffeeToAdd: CoffeeAttributes) {
    const coffeAlreadyExistsInCart = shoppingList.findIndex((coffee) => {
      return coffeeToAdd.name === coffee.name;
    });

    const newCart = produce(shoppingList, (draft) => {
      if (coffeAlreadyExistsInCart < 0) {
        draft.push(coffeeToAdd);
      } else {
        draft[coffeAlreadyExistsInCart].quantity += coffeeToAdd.quantity;
      }
    });

    setShoppingList(newCart);
  }

  function changeCartItemQuantity(cartItemName: string, type: "increase" | "decrease") {
    const newCart = produce(shoppingList, (draft) => {
      const coffeAlreadyExistsInCart = shoppingList.findIndex((coffee) => {
        return cartItemName === coffee.name;
      });

      if (coffeAlreadyExistsInCart >= 0) {
        const item = draft[coffeAlreadyExistsInCart];

        draft[coffeAlreadyExistsInCart].quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setShoppingList(newCart);
  }

  function removeCartItem(cartItemName: string) {
    const newCart = produce(shoppingList, (draft) => {
      const coffeAlreadyExistsInCart = shoppingList.findIndex((coffee) => {
        return cartItemName === coffee.name;
      });

      if (coffeAlreadyExistsInCart >= 0) {
        draft.splice(coffeAlreadyExistsInCart, 1);
      }
    });
    setShoppingList(newCart);
  }

  return (
    <ShoppingContext.Provider
      value={{ shoppingList, addCoffeeToCart, changeCartItemQuantity, removeCartItem }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}
