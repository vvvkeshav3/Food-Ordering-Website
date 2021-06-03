import React from 'react';
import classes from './Main.module.css';
import About from '../About/About';
import Dishes from '../../Dishes/Dishes';

const Main = (props) => {
  return (
    <React.Fragment>
      <div className={classes.img}></div>
      <main className={classes.main}>
        <About />
        <Dishes />
      </main>
    </React.Fragment>
  );
};

export default Main;
