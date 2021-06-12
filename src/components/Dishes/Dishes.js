import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../UI/Card/Card';
import DishItem from './DishItem';
import classes from './Dishes.module.css';

const Dishes = () => {

  const [dishData, setDishData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let {data} = await axios(
        `https://food-order-backend-default-rtdb.firebaseio.com/meals.json`
      );
      let dishes = [];
      for(let id in data){
        dishes.push({id: id, ...data[id]})
      }
      setDishData(dishes);
    };
    fetchData();
  }, []);


  return (
    <Card className={classes.card}>
      <ul className={classes['dishes-ul']}>
        {dishData.map((dish) => (
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
