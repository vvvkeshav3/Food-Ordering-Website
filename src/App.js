import React from 'react';
import MainHeader from './components/Layout/MainHeader/MainHeader';
import Main from './components/Layout/Main/Main';
import CartProvider from './components/store/CartProvider';
function App() {
  return (
    <CartProvider>
      <MainHeader />
      <Main />
    </CartProvider>
  );
}

export default App;
