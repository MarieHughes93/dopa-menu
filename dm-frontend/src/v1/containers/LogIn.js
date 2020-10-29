// package
import React, { Component } from "react"
// components
import LoginForm from '../components/loginForm'

class LogIn extends Component{
  render(){
    return (
    <div >
      <h1>LogIn</h1>
      <LoginForm/>
    </div>
    )
  }
}

export default LogIn