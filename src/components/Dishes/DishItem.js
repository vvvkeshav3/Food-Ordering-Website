import classes from './DishItem.module.css';
import React from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const DishItem = (props) => {
  const element = (
    <FontAwesomeIcon className={classes['plus-icon']} icon={faPlus} />
  );

  return (
    <li className={classes.container}>
      <div>
        <h3>{props.title}</h3>
        <p>
          <i>{props.subtitle}</i>
        </p>
        <p className={classes['dish-price']}>${props.price}</p>
      </div>
      <div>
        <Input id="quantity" label="Quantity" type="number" min="1" value="1" />
        <Button className={classes.btn}>{element} Add</Button>
      </div>
    </li>
  );
};

export default DishItem;
