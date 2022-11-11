import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { v4 } from "uuid";
import { ShoppingContext } from "../../../../contexts/ShoppingContext";

import {
  CardContainer,
  QuantityControllerContainer,
  ShoppingContainer,
  TagContainer,
} from "./styles";

interface CardProps {
  coffee: CoffeeProps;
}
export interface CoffeeProps {
  id: string;
  image: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
}

export function Card({ coffee }: CardProps) {
  const [coffeeQuantity, setCoffeeQuantity] = useState(1);

  const { addCoffeeToCart } = useContext(ShoppingContext);

  function handleIncreaseCoffeeQuantity() {
    setCoffeeQuantity((state) => state + 1);
  }

  function handleDecreaseCoffeeQuantity() {
    if (coffeeQuantity <= 1) {
      setCoffeeQuantity(1);
    } else {
      setCoffeeQuantity((state) => state - 1);
    }
  }

  function moneyConverter(price: number) {
    const priceConverted = price.toFixed(2).replace(".", ",");
    return priceConverted;
  }

  function handleAddToCart() {
    addCoffeeToCart({
      id: coffee.id,
      image: coffee.image,
      name: coffee.name,
      price: coffee.price,
      quantity: coffeeQuantity,
    });
  }

  return (
    <CardContainer>
      <img src={coffee.image} />
      <TagContainer>
        {coffee.tags.map((tags) => {
          return <span key={v4()}>{tags}</span>;
        })}
      </TagContainer>

      <strong>{coffee.name}</strong>
      <p>{coffee.description}</p>
      <ShoppingContainer>
        <span>R$</span>
        <strong>{moneyConverter(coffee.price)}</strong>
        <QuantityControllerContainer>
          <button onClick={handleDecreaseCoffeeQuantity}>{<Minus />}</button>
          <span>{coffeeQuantity}</span>
          <button onClick={handleIncreaseCoffeeQuantity}>{<Plus />}</button>
        </QuantityControllerContainer>
        <button onClick={handleAddToCart}>
          {
            <ShoppingCart
              size={22}
              weight="fill"
            />
          }
        </button>
      </ShoppingContainer>
    </CardContainer>
  );
}
