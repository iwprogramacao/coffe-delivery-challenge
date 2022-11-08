import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import logotype from "../../assets/coffe-delivery-logo.svg";
import { NavItemsContainer } from "../../pages/Home/styles";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img
          src={logotype}
          alt=""
        />
      </NavLink>
      <NavItemsContainer>
        <div>
          {<MapPin size={24} />}
          <span>Cascavel, PR</span>
        </div>
        <button>
          <NavLink
            to="/cart"
            title="Carrinho"
          >
            {<ShoppingCart size={24} />}
          </NavLink>
        </button>
      </NavItemsContainer>
    </HeaderContainer>
  );
}
