import React from 'react';
import classes from './ModalOverlay.module.css';

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <h2 className={classes.title}>Delicious Food, Delivered To You</h2>
      <div className={classes.instructions}>
        <p>
          Choose your favourite meal from out broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
    </div>
  );
};

export default ModalOverlay;
