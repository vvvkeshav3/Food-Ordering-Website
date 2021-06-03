import React from 'react';
import classes from './MainHeader.module.css';
import CartButton from './CartButton/CartButton';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <h1 className={classes.title}>ReactMeals</h1>
        <CartButton />
      </div>
    </header>
  );
};

export default MainHeader;
