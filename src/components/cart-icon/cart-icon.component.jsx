import React from "react";
import { ReactComponent as ShoppingCartIcon } from "../../assets/shoppingcart.svg";
import "./cart-icon.styles.scss";

const CartIcon = () => (
  <div className="cart-icon">
    <ShoppingCartIcon className="shopping-icon" />
    <div className="item-count">0</div>
  </div>
);

export default CartIcon;
