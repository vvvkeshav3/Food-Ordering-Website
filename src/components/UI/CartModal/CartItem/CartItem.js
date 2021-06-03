import React from 'react';
import classes from './CartItem.module.css';
import CartItemButton from '../CartItemButton/CartItemButton';

const CartItem = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes.info}>
        <h2 className={classes.title}>Sushi</h2>
        <div className={classes.about}>
          <p className={classes.price}>$22.99</p>
          <div className={classes.number}>x 1</div>
        </div>
      </div>
      <div className={classes.controls}>
        <CartItemButton>-</CartItemButton>        
        <CartItemButton>+</CartItemButton>        
      </div>
    </li>
  );
};

export default CartItem;
