import './App.css'

import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom'
import NavBar from './v1/containers/Navbar'
import Home from './v1/containers/Home'
import Dashboard from './v1/containers/Dashboard'
import Profile from './v1/containers/Profile'
import SignUp from './v1/containers/SignUp'
import LogIn from './v1/containers/LogIn'
import {withRouter} from 'react-router-dom'


class App extends Component{
  
  render(){
    return (
      <div className="wrapper">
      <NavBar fixed="top"/>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={LogIn}/>
            <Route exact path='/signup' component={SignUp}/>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/profile' component={Profile} />
          </Switch>
        </div>
    </div>

    )
  }
}
export default withRouter(App)