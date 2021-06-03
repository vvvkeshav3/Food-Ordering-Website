import React from 'react';
import classes from './CartModalOverlay.module.css';
import Card from '../../Card/Card';
import Button from '../../Button/Button';
import CartList from '../CartList/CartList';
const CartModalOverlay = (props) => {
  const style = {
    width: '90%',
    maxWidth: '600px',
  };

  return (
    <Card className={classes.modal} style={style}>
      <CartList />
      <footer className={classes.actions}>
        <div className={classes['total-amount']}>
          <p>Total Amount</p>
          <p>$89.99</p>
        </div>
        <Button className={classes.closeBtn} onClick={props.onClose}>
          Close
        </Button>
        <Button className={classes.btn} onClick={props.onOrder}>
          Order
        </Button>
      </footer>
    </Card>
  );
};

export default CartModalOverlay;
