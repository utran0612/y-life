import { useContext } from "react";
import CartContext from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartDropdownContainer, EmptyMessage, CartItems } from "./cart-dropdown.styles";
export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button
        onClick={() => {
          navigate("checkout");
        }}
      >
        GO TO CART
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
