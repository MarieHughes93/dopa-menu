import './index.css';
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import App from './App';
import reducers from './v1/reducers/_index'
import { BrowserRouter } from 'react-router-dom';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers((applyMiddleware(thunk))))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>

    <App />
    </BrowserRouter>

  </Provider>
  ,
  document.getElementById('root')
);
