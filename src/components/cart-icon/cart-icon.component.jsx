import React from "react";
import { ReactComponent as ShoppingCartIcon } from "../../assets/shoppingcart.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingCartIcon className="shopping-icon" />
    <div className="item-count">{itemsCount}</div>
  </div>
);

// using selector to memoize cartItems
const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
