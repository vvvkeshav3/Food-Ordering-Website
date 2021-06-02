import React from 'react';
import classes from './MainHeader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const MainHeader = (props) => {
  
    const element = <FontAwesomeIcon className={classes['cart-icon']} icon={faShoppingCart} />;

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <h1 className={classes.title}>ReactMeals</h1>
        <button className={classes.btn}>{element} Your Cart <span className={classes['total-items']}>2</span></button>
      </div>
    </header>
  );
};

export default MainHeader;
