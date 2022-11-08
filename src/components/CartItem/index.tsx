import { Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import { CoffeeAttributes, ShoppingContext } from "../../contexts/ShoppingContext";

import {
  CartItemContainer,
  QuantityControllerContainer,
  RemoveAndAddContainer,
  RemoverButton,
} from "./styles";

export function CartItem({ image, name, quantity, price }: CoffeeAttributes) {
  const { changeCartItemQuantity, removeCartItem } = useContext(ShoppingContext);

  function handleIncreaseCoffee() {
    changeCartItemQuantity(name, "increase");
  }

  function handleDecreaseCoffee() {
    changeCartItemQuantity(name, "decrease");
  }

  function handleRemoveItem() {
    removeCartItem(name);
  }

  return (
    <CartItemContainer>
      <img
        src={image}
        alt=""
      />
      <div>
        <p>{name}</p>
        <QuantityControllerContainer>
          <div>
            <RemoveAndAddContainer>
              <button onClick={handleDecreaseCoffee}>
                {
                  <Minus
                    size={14}
                    color={"#8047F8"}
                  />
                }
              </button>
              <span>{quantity}</span>
              <button onClick={handleIncreaseCoffee}>
                {
                  <Plus
                    size={14}
                    color={"#8047F8"}
                  />
                }
              </button>
            </RemoveAndAddContainer>
            <RemoverButton onClick={handleRemoveItem}>
              {<Trash color={"#8047F8"} />} Remover
            </RemoverButton>
          </div>
        </QuantityControllerContainer>
      </div>
      <strong>R$ {price}</strong>
    </CartItemContainer>
  );
}
