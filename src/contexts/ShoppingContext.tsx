import { createContext, ReactNode, useState } from "react";

interface ShoppingContextProviderProps {
  children: ReactNode;
}

interface ShoppingContextType {
  addCoffeeList: (coffeeToAdd: CoffeeAttributes) => void;
  shoppingList: CoffeeAttributes[];
}

interface CoffeeAttributes {
  id: Date;
  coffeeName: string;
  price: number;
  quantity: number;
}

export const ShoppingContext = createContext({} as ShoppingContextType);

export function ShoppingContextProvider({ children }: ShoppingContextProviderProps) {
  const [shoppingList, setShoppingList] = useState<CoffeeAttributes[]>([]);

  function addCoffeeList(coffeeToAdd: CoffeeAttributes) {
    const hasCoffeeAlready = shoppingList.find((coffee) => {
      return coffeeToAdd.coffeeName === coffee.coffeeName;
    });

    const coffeeList = shoppingList;
    if (hasCoffeeAlready) {
      coffeeList.map((coffee) => {
        if (coffee.coffeeName === coffeeToAdd.coffeeName) {
          coffee.quantity += coffeeToAdd.quantity;
        } else {
          return;
        }
      });
      setShoppingList(coffeeList);
    } else {
      setShoppingList([...shoppingList, coffeeToAdd]);
    }
  }
  console.log(shoppingList);

  return (
    <ShoppingContext.Provider value={{ shoppingList, addCoffeeList }}>
      {children}
    </ShoppingContext.Provider>
  );
}
