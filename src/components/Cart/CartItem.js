import React, { useContext } from 'react';
import classes from './CartItem.module.css';
import CartContext from '../store/cart-context';
const CartItem = ({ title, price, id, subtitle, qty }) => {
  const { addItem, removeItem } = useContext(CartContext);

  const decreaseButtonHandler = () => {
    removeItem(id);
  };
  const increaseButtonHandler = () => {
    const item = {
      id,
      price,
      title,
      subtitle,
      qty: 1,
    };
    addItem(item);
  };
  return (
    <li className={classes.item}>
      <div className={classes.info}>
        <h2 className={classes.title}>{title}</h2>
        <div className={classes.about}>
          <p className={classes.price}>${price}</p>
          <div className={classes.number}>x {qty}</div>
        </div>
      </div>
      <div className={classes.controls}>
        <button className={classes.button} onClick={decreaseButtonHandler}>
          -
        </button>
        <button className={classes.button} onClick={increaseButtonHandler}>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
