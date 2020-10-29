import './App.css'
// package
import {connect} from 'react-redux'
import React, { Component } from 'react'
import { Switch,withRouter, Redirect} from 'react-router-dom'
// containers
import NavHeader from './v1/containers/NavHeader'
import Home from './v1/containers/Home'
import Dashboard from './v1/containers/Dashboard'
import Profile from './v1/containers/Profile'
import SignUp from './v1/containers/SignUp'
import LogIn from './v1/containers/LogIn'
// helpers
import {Navi} from './v1/helpers/Routes'
import history from './v1/helpers/history'
// actions
import {actions} from './v1/actions/_index'
import {sessionReconnect} from './v1/actions/appAction'
import {activeSession} from './v1/actions/appAction'
import AlertComponent from './v1/components/alert'

class App extends Component{
  constructor(props) {
    super(props)
    sessionReconnect()
    history.listen((location, action)=>{
      if(this.props.alert.message){
        this.props.clearAlerts()
      }
    })
  }
  
  render(){
    const alert = this.props.alert
    const links = activeSession() ? Navi.PrivUrls : Navi.PubUrls
    
    return(
    <div className="wrapper">
      <NavHeader fixed="top" links={links}/>
      <div className="App">
        { alert.message &&
        <AlertComponent alert={alert} closeAlert={this.props.clearAlerts}/>}
        <Switch>
          <Navi.PubRoute restricted={false} component={Home} path="/" exact/>
          <Navi.PubRoute restricted={true} component={SignUp} path="/signup" exact/>
          <Navi.PubRoute restricted={true} component={LogIn} path="/login" exact/>
          <Navi.PrivRoute component={Dashboard} path="/dashboard" exact/>
          <Navi.PrivRoute component={Profile} path="/profile" exact/>
          <Redirect from="*" to="/"/>
        </Switch>
      </div>
    </div>
    )
  }
}
const mapStateToProps=(state)=> {
  return {
    alert: state.alert
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      clearAlerts: () => dispatch(actions.alert.clear())
  }
}
    
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))