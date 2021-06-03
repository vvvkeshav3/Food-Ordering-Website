import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DishContextProvider } from './components/store/dish-context';

ReactDOM.render(
  <DishContextProvider>
    <App />
  </DishContextProvider>,
  document.getElementById('root')
);
