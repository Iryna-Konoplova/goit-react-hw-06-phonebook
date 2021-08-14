// Модули
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Компоненты
import App from './App';
import store from './redux/store'

// Стили
import 'modern-normalize/modern-normalize.css';


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
