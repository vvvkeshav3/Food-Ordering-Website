import React from 'react';
import CartItem from '../CartItem/CartItem';
import classes from './CartList.module.css';
const CartList = (props) => {
  return (
    <ul className ={classes.list} id="cartList">
      <CartItem />
      <CartItem />
      {/* <CartItem /> */}
      {/* <CartItem /> */}
      {/* <CartItem /> */}
    </ul>
  );
};

export default CartList;
