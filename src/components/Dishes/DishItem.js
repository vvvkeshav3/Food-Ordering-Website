import React, { useState, useContext } from 'react';
import classes from './DishItem.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../store/cart-context';

const DishItem = ({ title, subtitle, price, id }) => {
  const [qty, setQty] = useState(1);
  const {addItem} = useContext(CartContext);
  const changeHandler = (event) => {
    setQty(+event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const item = {
      id,
      title,
      subtitle,
      price,
      qty,
    };
    // console.log(typeof item.price );
    addItem(item);
    setQty(1);
  };

  const element = (
    <FontAwesomeIcon className={classes['plus-icon']} icon={faPlus} />
  );

  return (
    <li className={classes.container}>
      <div className={classes.details}>
        <h3>{title}</h3>
        <p>
          <i>{subtitle}</i>
        </p>
        <p className={classes['dish-price']}>${price}</p>
      </div>
      <form onSubmit={submitHandler}>
        <Input
          id="quantity"
          label="Quantity"
          type="number"
          min="1"
          max="5"
          value={qty}
          onChange={changeHandler}
        />
        <Button type="submit" className={classes.btn}>
          {element} Add
        </Button>
      </form>
    </li>
  );
};

export default DishItem;
