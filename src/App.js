import React, { useState } from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import Main from './components/Main/Main';
const DISH_DATA = [
  {
    id: 'D1',
    title: 'Sushi',
    subtitle: 'Finest fish and veggies',
    price: 22.99,
    qty : 0
  },
  {
    id: 'D2',
    title: 'Schnitzel',
    subtitle: 'A german speciality!',
    price: 16.5,
    qty : 0
  },
  {
    id: 'D3',
    title: 'Barbecue Burger',
    subtitle: 'American, raw, meaty',
    price: 12.99,
    qty : 0
  },
  {
    id: 'D4',
    title: 'Green Bowl',
    subtitle: 'Healthy...and green...',
    price: 18.99,
    qty : 0
  },
];

function App() {
  const [dishesData, setdishesData] = useState(DISH_DATA);

  return (
    <React.Fragment>
      <MainHeader />
      <Main dishesData={dishesData} />
    </React.Fragment>
  );
}

export default App;
