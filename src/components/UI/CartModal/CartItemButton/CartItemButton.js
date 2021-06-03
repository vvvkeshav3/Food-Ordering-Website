import React from 'react';
import classes from './CartItemButton.module.css';
const CartItemButton = (props)=>{

    return (
        <button className = {`${classes.button} ${props.className}`}>
            {props.children}
        </button>
    )

}

export default CartItemButton;