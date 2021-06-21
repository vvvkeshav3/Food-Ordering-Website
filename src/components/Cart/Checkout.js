import React, { useRef, useState } from 'react';
import classes from './Checkout.module.css';
import Button from '../UI/Button/Button';

const isEmpty = (value) => value.trim() === '';
const isSixChars = (value) => value.trim().length === 6;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalIsValid = isSixChars(enteredPostal);

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postal: enteredPostalIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    // submit the data
    props.onConfirm({
      name : enteredName,
      street : enteredStreet,
      city : enteredCity,
      postal : enteredPostal,
    })
  };
  const nameControlClasses = `${classes.control} ${
    formInputValidity.name ? '' : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputValidity.street ? '' : classes.invalid
  }`;
  const postalControlClasses = `${classes.control} ${
    formInputValidity.postal ? '' : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputValidity.city ? '' : classes.invalid
  }`;

  return (
    <form
      onSubmit={confirmHandler}
      className={classes.form}
      id="changeScrollBar"
    >
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          className={classes.input}
          type="text"
          id="name"
        />
        {!formInputValidity.name && <p>Please Enter a valid Name.</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input
          ref={streetInputRef}
          className={classes.input}
          type="text"
          id="street"
        />
        {!formInputValidity.street && <p>Please Enter a valid Street.</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          ref={postalInputRef}
          className={classes.input}
          type="text"
          id="postal"
        />
        {!formInputValidity.postal && <p>Please Enter a valid postal code.</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input
          ref={cityInputRef}
          className={classes.input}
          type="text"
          id="city"
        />
        {!formInputValidity.city && <p>Please Enter a valid city.</p>}
      </div>
      <div className={classes.actions}>
        <Button
          type="button"
          onClick={props.onClose}
          className={classes.closeBtn}
        >
          Cancel
        </Button>
        <Button type="submit" className={classes.btn}>
          Confirm
        </Button>
      </div>
    </form>
  );
};

export default Checkout;
