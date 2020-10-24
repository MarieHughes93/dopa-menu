import './index.css'
import './App.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import App from './App'
import AppBrowserRouter from './v1/helpers/BrowserRouter'
import store from './v1/helpers/store'

ReactDOM.render(
  <Provider store={store}>
    <AppBrowserRouter >
    <App />
    </AppBrowserRouter >

  </Provider>
  ,
  document.getElementById('root')
)
