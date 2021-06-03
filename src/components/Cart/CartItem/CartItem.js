import React from 'react';
import classes from './CartItem.module.css';
import CartItemButton from '../CartItemButton/CartItemButton';

const CartItem = (props) => {
  const decreaseButtonHandler = () => {
    props.onChange(props.id, -1);
  };
  const increaseButtonHandler = () => {
    props.onChange(props.id, 1);
  };
  return (
    <li className={classes.item}>
      <div className={classes.info}>
        <h2 className={classes.title}>{props.title}</h2>
        <div className={classes.about}>
          <p className={classes.price}>${props.price}</p>
          <div className={classes.number}>x {props.qty}</div>
        </div>
      </div>
      <div className={classes.controls}>
        <CartItemButton onClick={decreaseButtonHandler}>-</CartItemButton>
        <CartItemButton onClick={increaseButtonHandler}>+</CartItemButton>
      </div>
    </li>
  );
};

export default CartItem;
