import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DishItem from './DishItem';
import classes from './Dishes.module.css';

const Dishes = () => {
  const [dishData, setDishData] = useState([]);

  // Loading State
  const [isLoading, setIsLoading] = useState(false);
  // Error State
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      let { data } = await axios(
        `https://food-order-backend-default-rtdb.firebaseio.com/meals.json`
      );
      let dishes = [];
      for (let id in data) {
        dishes.push({ id: id, ...data[id] });
      }
      setDishData(dishes);
      setIsLoading(false);
    };
    // Here fetchData is an async function , so it returns a promise.
    // To work with await, we need to create another function to call fetchData
    // await fetchData()
    // or we can use .catch as it returns a promise
    fetchData().catch(() => {
      setIsLoading(false);
      setHttpError('Failed to Fetch!!');
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.dishesLoading}>
        <p>Loading....</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.dishesError}>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <section className={classes.card}>
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
    </section>
  );
};

export default Dishes;
