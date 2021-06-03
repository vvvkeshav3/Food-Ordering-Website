import React, { useContext } from 'react';
import Card from '../UI/Card/Card';
import DishItem from './DishItem';
import classes from './Dishes.module.css';
import DishContext from '../store/dish-context';

const Dishes = () => {
  const cxt = useContext(DishContext);
  return (
    <Card className={classes.card}>
      <ul className={classes['dishes-ul']}>
        {cxt.dishesData.map((dish) => (
          <DishItem
            title={dish.title}
            subtitle={dish.subtitle}
            price={dish.price}
            key={dish.id}
            id={dish.id}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Dishes;
