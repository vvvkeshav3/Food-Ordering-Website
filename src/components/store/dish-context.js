import React, { useState, useEffect } from 'react';
const DISH_DATA = [
  {
    id: 'd1',
    title: 'Dal Makhani',
    subtitle:
      'Black and Yellow lentils cooked with onion, tomato, herbs and ghee(butter)',
    price: 22.99,
    qty: 0,
  },
  {
    id: 'd2',
    title: 'Dal Fry',
    subtitle:
      'Yellow and red lentils cooked and fried in butter, garnished w/onion & tomatoes.',
    price: 16.5,
    qty: 0,
  },
  {
    id: 'd3',
    title: 'Mixed Vegetables',
    subtitle: 'Fresh vegetables cooked with spices',
    price: 12.99,
    qty: 0,
  },
  {
    id: 'd4',
    title: 'Aloo Chole',
    subtitle:
      'Chick peas and scalloped potaotes cooked with fresh onion and tomato',
    price: 18.99,
    qty: 0,
  },
  {
    id: 'd5',
    title: 'Veg. Sai Korma',
    subtitle:
      'Nine Vegetables gently simmered in a spiced-laced cream sauce and sprinked with nuts.',
    price: 22.99,
    qty: 0,
  },
  {
    id: 'd6',
    title: 'Matar Paneer',
    subtitle: 'Fresh homemade cheese cubes with peas in a curry sauce',
    price: 20.99,
    qty: 0,
  },
  {
    id: 'd7',
    title: 'Veg. Malai Kofta',
    subtitle:
      'Homemade Indian Cheese, stuffed in vegetable balls and cooked in a mildly spiced creamy sauce.',
    price: 18.99,
    qty: 0,
  },
  {
    id: 'd8',
    title: 'Idli Sambar',
    subtitle: 'Rice and Lentil Patties served with Sambar',
    price: 6.99,
    qty: 0,
  },
  {
    id: 'd9',
    title: 'Noodles Soup',
    subtitle:
      'Noodles soup cooked with Sichuan pepper, ginger, tomato, coriander, and lemon juice',
    price: 9.99,
    qty: 0,
  },
  {
    id: 'd10',
    title: 'Chole Bhatura',
    subtitle:
      'Chana masala served with Bhatura (White flour deep-fried fluffy bread)',
    price: 12.99,
    qty: 0,
  },
];

const DishContext = React.createContext({
  dishesData: [],
  cartQty: 0,
  totalAmt: 0,
  isOrderPossible: false,
  onAddToCart: () => {},
});

export const DishContextProvider = (props) => {
  const [dishesData, setDishesData] = useState(DISH_DATA);
  const [cartQty, setCartQty] = useState(0);
  const [totalAmt, setTotalAmt] = useState(0.0);
  const [isOrderPossible, setIsOrderPossible] = useState(false);

  useEffect(() => {
    console.log('called', totalAmt.toFixed(2), +totalAmt.toFixed(2) > 0);
    setIsOrderPossible(+totalAmt.toFixed(2) > 0);
  }, [totalAmt]);

  const changeDataHandler = (id, qty) => {
    setCartQty((prevQty) => prevQty + qty);
    setDishesData((prevDishes) =>
      prevDishes.map((dish) => {
        if (dish.id === id) {
          setTotalAmt((prevAmt) => prevAmt + dish.price * qty);
          return { ...dish, qty: dish.qty + qty };
        } else {
          return { ...dish };
        }
      })
    );
  };

  return (
    <DishContext.Provider
      value={{
        dishesData: dishesData,
        cartQty: cartQty,
        totalAmt: totalAmt,
        isOrderPossible: isOrderPossible,
        onAddToCart: changeDataHandler,
      }}
    >
      {props.children}
    </DishContext.Provider>
  );
};

export default DishContext;
