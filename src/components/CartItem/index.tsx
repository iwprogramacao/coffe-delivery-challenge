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

  function moneyConverter(price: number) {
    const priceConverted = price.toFixed(2).replace(".", ",");
    return priceConverted;
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
              <span>{quantity >= 1 ? quantity : 1}</span>
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
      <strong>R$ {moneyConverter(price)}</strong>
    </CartItemContainer>
  );
}
