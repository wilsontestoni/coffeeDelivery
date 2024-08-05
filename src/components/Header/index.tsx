import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import logo from "../../assets/logo.svg";
import { HeaderContainer, HeaderItems, LocationSpan, CartLink } from "./styles";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export function Header() {
  const { cart } = useCart();

  const hasOrder = cart.length > 0;

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <HeaderItems>
        <LocationSpan>
          <MapPin weight="fill" size={22} />
          Porto Alegre, RS
        </LocationSpan>
        <CartLink to={"/checkout"}>
          {hasOrder && <span>{cart.length}</span>}
          <ShoppingCart weight="fill" size={22} />
        </CartLink>
      </HeaderItems>
    </HeaderContainer>
  );
}
