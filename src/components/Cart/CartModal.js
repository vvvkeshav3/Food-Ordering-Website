import React from 'react';
import ReactDOM from 'react-dom';
import CartModalOverlay from './CartModalOverlay';
import Backdrop from '../UI/Backdrop/Backdrop';
const CartModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <CartModalOverlay onOrder={props.onOrder} onClose={props.onClose} />,
        document.getElementById('overlay-root')
      )}
      ;
    </React.Fragment>
  );
};
export default CartModal;
