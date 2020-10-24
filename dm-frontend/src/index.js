import './index.css'
import './App.css'
import { Router } from "react-router-dom"
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import store from './v1/helpers/store'
import history from "./v1/helpers/history";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
)
