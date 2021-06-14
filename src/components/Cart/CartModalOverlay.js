import React, { useContext, useState } from 'react';
import classes from './CartModalOverlay.module.css';
import Button from '../UI/Button/Button';
import CartContext from '../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';
const CartModalOverlay = (props) => {
  const { items, totalAmount } = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);

  const orderHandler = () => {
    setShowCheckout(true);
  };
  const cartItems = items.map(({ title, price, id, qty, subtitle }) => (
    <CartItem
      title={title}
      price={price}
      key={id}
      subtitle={subtitle}
      id={id}
      qty={qty}
    />
  ));

  const modalActions = (
    <div className={classes.actions}>
      <Button className={classes.closeBtn} onClick={props.onClose}>
        Close
      </Button>
      <Button
        className={classes.btn}
        onClick={orderHandler}
        disabled={!items.length > 0}
      >
        Order
      </Button>{' '}
    </div>
  );

  return (
    <section className={classes.modal}>
      <ul className={classes.list} id="changeScrollBar">
        {cartItems}
      </ul>
      <section>
        <div className={classes['total-amount']}>
          <p>Total Amount</p>
          <p>${+totalAmount.toFixed(2)}</p>
        </div>
        {showCheckout && <Checkout onClose ={props.onClose}/>}
        {!showCheckout && modalActions}
      </section>
    </section>
  );
};

export default CartModalOverlay;
