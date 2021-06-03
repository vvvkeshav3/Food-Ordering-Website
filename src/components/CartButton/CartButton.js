import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import classes from './CartButton.module.css';
import CartModal from '../UI/CartModal/CartModal';
const CartButton = (props) => {
  const [showCartOverlay, setShowCartOverlay] = useState(false);

  useEffect(() => {
    const body = document.body;
    body.style.overflow = showCartOverlay ? 'hidden' : 'auto';
  }, [showCartOverlay]);

  const clickHandler = () => {
    setShowCartOverlay(true);
  };

  const closeHandler = () => {
    setShowCartOverlay(false);
  };

  const orderHandler = () => {
    console.log('Ordering.....!!');
  };

  const element = (
    <FontAwesomeIcon className={classes['cart-icon']} icon={faShoppingCart} />
  );

  return (
    <React.Fragment>
      {showCartOverlay && (
        <CartModal onClose={closeHandler} onOrder={orderHandler} />
      )}
      <button className={classes.btn} onClick={clickHandler}>
        {element} Your Cart <span className={classes['total-items']}>2</span>
      </button>
    </React.Fragment>
  );
};

export default CartButton;
