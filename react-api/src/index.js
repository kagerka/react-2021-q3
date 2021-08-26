import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import './style.scss';
import store from './store/store';

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
