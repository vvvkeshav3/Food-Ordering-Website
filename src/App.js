import React from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import classes from './App.module.css';
import ModalOverlay from './components/UI/ModalOverlay/ModalOverlay';
import Dishes from './components/Dishes/Dishes';

function App() {
  return (
    <React.Fragment>
      <MainHeader />
      <div className={classes.img}></div>
      <main className={classes.main}>
        <ModalOverlay />
        <Dishes />
      </main>
    </React.Fragment>
  );
}

export default App;
