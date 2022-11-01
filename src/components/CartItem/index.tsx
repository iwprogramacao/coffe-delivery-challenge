import { Minus, Plus, Trash } from "phosphor-react";
import coffeImage from "../../assets/products/expresso.png";

import {
  CartItemContainer,
  QuantityControllerContainer,
  RemoveAndAddContainer,
  RemoverButton,
} from "./styles";

export function CartItem() {
  return (
    <CartItemContainer>
      <img
        src={coffeImage}
        alt=""
      />
      <div>
        <p>Expresso Tradicional</p>
        <QuantityControllerContainer>
          <div>
            <RemoveAndAddContainer>
              <button>
                {
                  <Minus
                    size={14}
                    color={"#8047F8"}
                  />
                }
              </button>
              <span>1</span>
              <button>
                {
                  <Plus
                    size={14}
                    color={"#8047F8"}
                  />
                }
              </button>
            </RemoveAndAddContainer>
            <RemoverButton>{<Trash color={"#8047F8"} />} Remover</RemoverButton>
          </div>
        </QuantityControllerContainer>
      </div>
      <strong>R$ 19,90</strong>
    </CartItemContainer>
  );
}
