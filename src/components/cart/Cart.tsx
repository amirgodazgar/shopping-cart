import CartItem from "./../cartItem/CartItem";
import { Wrapper } from "./cart.styles";
import React, { FC } from "react";
import { IProducts } from "./../../types/interfaces";

type Props = {
  cartItems: IProducts[];
  addToCart: (clickedItem: IProducts) => void;
  removeFromCart: (id: number) => void;
};

const Cart: FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {!cartItems.length ? <p>no item in cart ... </p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </Wrapper>
  );
};

export default Cart;
