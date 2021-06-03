import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import classes from './CartButton.module.css';
import CartModal from '../../../Cart/CartModal/CartModal';
import DishContext from '../../../store/dish-context';

const CartButton = () => {
  const [showCartOverlay, setShowCartOverlay] = useState(false);
  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);

  const ctx = useContext(DishContext);
  useEffect(() => {
    const body = document.body;
    body.style.overflow = showCartOverlay ? 'hidden' : 'auto';
  }, [showCartOverlay]);

  useEffect(() => {
    if (ctx.cartQty === 0 || showCartOverlay) {
      return;
    }
    setIsButtonHighlighted(true);
    const timer = setTimeout(() => {
      setIsButtonHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [showCartOverlay, ctx.cartQty]);

  useEffect(() => {
    setIsButtonHighlighted(false);
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
      <button
        className={`${classes.btn} ${isButtonHighlighted ? classes.bump : ''}`}
        onClick={clickHandler}
      >
        {element} Your Cart{' '}
        <span className={classes['total-items']}>{ctx.cartQty}</span>
      </button>
    </React.Fragment>
  );
};

export default CartButton;
