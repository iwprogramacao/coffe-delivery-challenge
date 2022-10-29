import { Minus, Plus, ShoppingCart } from "phosphor-react";

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
  price: string;
}

export function Card({ image, tags, name, description, price }: CardProps) {
  return (
    <CardContainer>
      <img
        src={image}
        alt=""
      />
      <TagContainer>
        {tags.map((tag) => {
          return <span>{tag}</span>;
        })}
      </TagContainer>

      <strong>{name}</strong>
      <p>{description}</p>
      <ShoppingContainer>
        <span>R$</span>
        <strong>{price}</strong>
        <QuantityControllerContainer>
          <button>{<Minus />}</button>
          <span>1</span>
          <button>{<Plus />}</button>
        </QuantityControllerContainer>
        <button>{<ShoppingCart size={22} />}</button>
      </ShoppingContainer>
    </CardContainer>
  );
}
