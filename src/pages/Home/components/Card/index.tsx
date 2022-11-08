import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { ShoppingContext } from "../../../../contexts/ShoppingContext";

import {
  CardContainer,
  QuantityControllerContainer,
  ShoppingContainer,
  TagContainer,
} from "./styles";

interface CardProps {
  image: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
}

export function Card({ image, tags, name, description, price }: CardProps) {
  const [coffeeQuantity, setCoffeeQuantity] = useState(1);

  const { shoppingList, addCoffeeToCart } = useContext(ShoppingContext);

  function handleIncreaseCoffeQuantity() {
    setCoffeeQuantity((state) => state + 1);
  }

  function handleDecreaseCoffeQuantity() {
    if (coffeeQuantity <= 1) {
      setCoffeeQuantity(1);
    } else {
      setCoffeeQuantity((state) => state - 1);
    }
  }

  function handleAddToCart() {
    addCoffeeToCart({
      id: new Date(),
      image: image,
      name: name,
      price: price,
      quantity: coffeeQuantity,
    });
  }

  return (
    <CardContainer>
      <img
        src={image}
        alt=""
      />
      <TagContainer>
        {tags.map((tag) => {
          return <span key={tag.length}>{tag}</span>;
        })}
      </TagContainer>

      <strong>{name}</strong>
      <p>{description}</p>
      <ShoppingContainer>
        <span>R$</span>
        <strong>{price.toString()}</strong>
        <QuantityControllerContainer>
          <button onClick={handleDecreaseCoffeQuantity}>{<Minus />}</button>
          <span>{coffeeQuantity}</span>
          <button onClick={handleIncreaseCoffeQuantity}>{<Plus />}</button>
        </QuantityControllerContainer>
        <button onClick={handleAddToCart}>{<ShoppingCart size={22} />}</button>
      </ShoppingContainer>
    </CardContainer>
  );
}
