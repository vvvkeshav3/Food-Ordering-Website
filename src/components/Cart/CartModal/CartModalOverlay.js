import React, { useContext } from 'react';
import classes from './CartModalOverlay.module.css';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import CartList from '../CartList/CartList';
import DishContext from '../../store/dish-context';

const CartModalOverlay = (props) => {
  const ctx = useContext(DishContext);
  const style = {
    width: '85%',
    maxWidth: '600px',
  };

  return (
    <Card className={classes.modal} style={style}>
      <CartList />
      <footer className={classes.actions}>
        <div className={classes['total-amount']}>
          <p>Total Amount</p>
          <p>${+ctx.totalAmt.toFixed(2)}</p>
        </div>
        <Button className={classes.closeBtn} onClick={props.onClose}>
          Close
        </Button>
        <Button
          className={classes.btn}
          onClick={props.onOrder}
          disabled={!ctx.isOrderPossible}
        >
          Order
        </Button>
      </footer>
    </Card>
  );
};

export default CartModalOverlay;
