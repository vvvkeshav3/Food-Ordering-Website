import React, { useContext } from 'react';
import CartItem from '../CartItem/CartItem';
import classes from './CartList.module.css';
import DishContext from '../../store/dish-context';

const CartList = (props) => {
  const ctx = useContext(DishContext);
  const filteredData = ctx.dishesData.filter((dish) => dish.qty > 0);
  const changeHandler = (id, qty) => {
    ctx.onAddToCart(id, qty);
  };
  return (
    <ul className={classes.list} id="cartList">
      {filteredData.map((dish) => (
        <CartItem
          title={dish.title}
          price={dish.price}
          key={dish.id}
          id={dish.id}
          qty={dish.qty}
          onChange={changeHandler}
        />
      ))}
    </ul>
  );
};

export default CartList;
