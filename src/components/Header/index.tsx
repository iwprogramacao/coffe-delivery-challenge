import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import logotype from "../../assets/coffee-delivery-logo.svg";
import { ShoppingContext } from "../../contexts/ShoppingContext";

import { HeaderButton, HeaderContainer, NavItemsContainer } from "./styles";

export function Header() {
  const { shoppingList } = useContext(ShoppingContext);
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
              {shoppingList.length > 0 && <span>{shoppingList.length}</span>}
            </HeaderButton>
          </NavLink>
        </NavItemsContainer>
      </div>
    </HeaderContainer>
  );
}
