import React, { Component } from "react";
import { Switch, Route} from 'react-router-dom'
import './App.css';
import NavBar from './v1/containers/Navbar'
import Home from './v1/containers/Home'
import Dashboard from './v1/containers/Dashboard'
import Profile from './v1/containers/Profile'
import SignUp from './v1/containers/SignUp'

class App extends Component{
  
  render(){
    return (
      <div className="wrapper">
      <NavBar />
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signup' component={SignUp}/>
            <Route exact path='/menu' component={Dashboard}/>
            <Route exact path='/profile' component={Profile} />
          </Switch>
        </div>
    </div>

    );
  }
}
export default App;