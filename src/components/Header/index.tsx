import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import logotype from "../../assets/coffee-delivery-logo.svg";

import { HeaderButton, HeaderContainer, NavItemsContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <div className="wrapper">
        <NavLink to="/">
          <img src={logotype} />
        </NavLink>
        <NavItemsContainer>
          <HeaderButton variant="purple">
            <MapPin
              size={24}
              weight="fill"
            />
            Cascavel, PR
          </HeaderButton>

          <NavLink
            to="/cart"
            title="Carrinho"
          >
            <HeaderButton variant="yellow">
              <ShoppingCart
                size={24}
                weight="fill"
              />
            </HeaderButton>
          </NavLink>
        </NavItemsContainer>
      </div>
    </HeaderContainer>
  );
}
