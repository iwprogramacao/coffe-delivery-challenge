import coffeImage from "../../assets/products/expresso.png";
import { CartItemContainer } from "./styles";

export function CartItem() {
  return (
    <CartItemContainer>
      <img
        src={coffeImage}
        alt=""
      />
      <div>
        <p>Expresso Tradicional</p>
        <div>
          <button>Adicionar</button>
          <button>Remover</button>
        </div>
        <strong>R$ 19,90</strong>
      </div>
    </CartItemContainer>
  );
}
