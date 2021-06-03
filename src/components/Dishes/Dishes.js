import React from 'react';
import Card from '../UI/Card/Card';
import DishItem from './DishItem';
import classes from './Dishes.module.css';
const Dishes = (props) => {
  return (
    <Card className={` ${classes.card} ${props.className}`}>
      <ul className={classes['dishes-ul']}>
        {props.dishesData.map((dish) => (
          <DishItem
            title={dish.title}
            subtitle={dish.subtitle}
            price={dish.price}
            key={dish.id}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Dishes;
