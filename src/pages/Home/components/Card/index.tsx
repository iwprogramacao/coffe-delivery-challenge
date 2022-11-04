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
  const [coffeQuantity, setCoffeQuantity] = useState(1);

  const { addCoffeeList } = useContext(ShoppingContext);

  function handleIncreaseCoffeQuantity() {
    const coffeIncreased = coffeQuantity + 1;
    setCoffeQuantity(coffeIncreased);
  }

  function handleDecreaseCoffeQuantity() {
    if (coffeQuantity <= 1) {
      setCoffeQuantity(1);
    } else {
      const coffeIncreased = coffeQuantity - 1;
      setCoffeQuantity(coffeIncreased);
    }
  }

  function handleAddToCart() {
    addCoffeeList({
      id: new Date(),
      coffeeName: name,
      price: price,
      quantity: coffeQuantity,
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
          <span>{coffeQuantity}</span>
          <button onClick={handleIncreaseCoffeQuantity}>{<Plus />}</button>
        </QuantityControllerContainer>
        <button onClick={handleAddToCart}>{<ShoppingCart size={22} />}</button>
      </ShoppingContainer>
    </CardContainer>
  );
}
