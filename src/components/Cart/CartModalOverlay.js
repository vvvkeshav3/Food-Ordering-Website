import React, { useContext, useState } from 'react';
import classes from './CartModalOverlay.module.css';
import Button from '../UI/Button/Button';
import CartContext from '../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';
import axios from 'axios';
const CartModalOverlay = (props) => {
  const { items, totalAmount, clearCart } = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const orderHandler = () => {
    setShowCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);

    // fetch(
    //   `https://food-order-backend-default-rtdb.firebaseio.com/orders.json`,
    //   {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       user: userData,
    //       orderedItems: items,
    //     }),
    //   }
    // );

    await axios.post(
      `https://food-order-backend-default-rtdb.firebaseio.com/orders.json`,
      {
        user: userData,
        orderedItems: items,
      }
    );

    setIsSubmitting(false);
    setDidSubmit(true);
    clearCart();
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

  const cartModalContent = (
    <React.Fragment>
      <ul className={classes.list} id="changeScrollBar">
        {cartItems}
      </ul>
      <section>
        <div className={classes['total-amount']}>
          <p>Total Amount</p>
          <p>${+totalAmount.toFixed(2)}</p>
        </div>
        {showCheckout && (
          <Checkout onClose={props.onClose} onConfirm={submitOrderHandler} />
        )}
        {!showCheckout && modalActions}
      </section>
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order Data...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <Button className={classes.closeBtn} onClick={props.onClose}>
          Close
        </Button>
      </div>
    </React.Fragment>
  );

  return (
    <section className={classes.modal}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </section>
  );
};

export default CartModalOverlay;
