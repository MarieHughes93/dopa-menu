import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
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
