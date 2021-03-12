// package
import React, { Component } from "react"
import {connect} from 'react-redux'
// actions
import {actions} from '../actions/_index'
// components
import {LoginForm} from '../components/loginForm'

class LogIn extends Component{
  constructor(props){
    super(props)
    this.state={
        email: '',
        password: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }
  handleOnChange=(e)=>{
    e.persist()
    this.setState(()=>({
        [e.target.name]: e.target.value 
    }))
  }
  handleOnSubmit=(e)=>{
    e.preventDefault()
    this.props.login(this.state)
    this.setState({
        email: "",
        password: ""
    })
  }
  render(){
    return(
      <div className='userLoginContainer'>
        <h1>LogIn</h1>
        <LoginForm
        user={this.state}
        onChange={this.handleOnChange}
        onSubmit={this.handleOnSubmit}
        />
      </div>
    )
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
      login: (userInfo)=>dispatch(actions.app.logIn(userInfo))
  }
}

export default connect(null, mapDispatchToProps)(LogIn)