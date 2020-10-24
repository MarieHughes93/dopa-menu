import './index.css'
import './App.css'
import { BrowserRouter as Router } from "react-router-dom"
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import store from './v1/helpers/store'

ReactDOM.render(
  <Provider store={store}>
    <Router >
    <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
)
