import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import classes from './CartButton.module.css';
import CartModal from '../../../Cart/CartModal';
import CartContext from '../../../store/cart-context';

const CartButton = () => {
  const [showCartOverlay, setShowCartOverlay] = useState(false);
  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);

  const {items} = useContext(CartContext);
  let cartQty = 0;
  for(let {qty} of items){
    cartQty+=qty;
  }

  useEffect(() => {
    const body = document.body;
    body.style.overflow = showCartOverlay ? 'hidden' : 'auto';
  }, [showCartOverlay]);

  useEffect(() => {
    if (cartQty === 0 || showCartOverlay) {
      return;
    }
    setIsButtonHighlighted(true);
    const timer = setTimeout(() => {
      setIsButtonHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [showCartOverlay, cartQty]);

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
        <span className={classes['total-items']}>{cartQty}</span>
      </button>
    </React.Fragment>
  );
};

export default CartButton;
