import React from 'react';

const CartContext = React.createContext({
  cart: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export default CartContext;
