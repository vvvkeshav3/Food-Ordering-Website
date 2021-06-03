import React, { useState, useContext } from 'react';
import classes from './DishItem.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import DishContext from '../store/dish-context';

const DishItem = (props) => {
  const [qty, setQty] = useState(1);
  const ctx = useContext(DishContext);
  const changeHandler = (event) => {
    setQty(+event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onAddToCart(props.id, qty);
    setQty(1);
  };

  const element = (
    <FontAwesomeIcon className={classes['plus-icon']} icon={faPlus} />
  );

  return (
    <li className={classes.container}>
      <div className={classes.details}>
        <h3>{props.title}</h3>
        <p>
          <i>{props.subtitle}</i>
        </p>
        <p className={classes['dish-price']}>${props.price}</p>
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
