import { MapPin, ShoppingCart } from "phosphor-react";
import logotype from "../../assets/coffe-delivery-logo.svg";
import { NavItemsContainer } from "../../pages/Home/styles";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logotype}
        alt=""
      />
      <NavItemsContainer>
        <div>
          {<MapPin size={24} />}
          <span>Cascavel, PR</span>
        </div>
        <button>{<ShoppingCart size={24} />}</button>
      </NavItemsContainer>
    </HeaderContainer>
  );
}
