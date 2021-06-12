import React, { useContext } from 'react';
import classes from './CartModalOverlay.module.css';
import Button from '../UI/Button/Button';
import CartContext from '../store/cart-context';
import CartItem from './CartItem';
const CartModalOverlay = (props) => {
  const { items, totalAmount } = useContext(CartContext);

  return (
    <section className={classes.modal}>
      <ul className={classes.list} id="cartList">
        {items.map(({ title, price, id, qty, subtitle }) => (
          <CartItem
            title={title}
            price={price}
            key={id}
            subtitle={subtitle}
            id={id}
            qty={qty}
          />
        ))}
      </ul>
      <footer className={classes.actions}>
        <div className={classes['total-amount']}>
          <p>Total Amount</p>
          <p>${+totalAmount.toFixed(2)}</p>
        </div>
        <Button className={classes.closeBtn} onClick={props.onClose}>
          Close
        </Button>
        <Button
          className={classes.btn}
          onClick={props.onOrder}
          disabled={!items.length > 0}
        >
          Order
        </Button>
      </footer>
    </section>
  );
};

export default CartModalOverlay;
