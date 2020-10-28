import './App.css'

import React, { Component } from 'react'
import { Switch} from 'react-router-dom'
import NavHeader from './v1/containers/NavHeader'
import Home from './v1/containers/Home'
import Dashboard from './v1/containers/Dashboard'
import Profile from './v1/containers/Profile'
import SignUp from './v1/containers/SignUp'
import LogIn from './v1/containers/LogIn'
import {Navi} from './v1/helpers/Routes'
import {sessionCheck} from './v1/actions/appAction'


class App extends Component{
   
  render(){
    let topNav
    if (sessionCheck()){
      topNav = <NavHeader fixed="top" links={Navi.PrivUrls}  />
    }else{
      topNav = <NavHeader fixed="top" links={Navi.PubUrls} />
    }

    return (
      <div className="wrapper">
        {topNav}
        <div className="App">
          <Switch>
            <Navi.PubRoute restricted={false} component={Home} path="/" exact />
            <Navi.PubRoute restricted={true} component={SignUp} path="/signup" exact  />
            <Navi.PubRoute restricted={true} component={LogIn} path="/login" exact />
            <Navi.PrivRoute component={Dashboard} path="/dashboard" exact />
            <Navi.PrivRoute component={Profile} path="/profile" exact />
          </Switch>
        </div>
    </div>

    )
  }
}
export default App