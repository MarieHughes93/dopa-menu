// package
import React, { Component } from 'react'
import {connect} from 'react-redux'
// actions
import {actions} from '../actions/_index'
// components
import {SignUpForm} from '../components/signUpForm'

class SignUp extends Component{
  constructor(props){
    super(props)
    this.state = {
        name: '',
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
    this.props.register(this.state)
    this.setState({
        name: "",
        email: "",
        password: ""
    })
  }

  render(){
    return(
        <div className='userSignUpContainer'>
          <h1>Sign Up</h1>
          <SignUpForm
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
        register: (userInfo)=>dispatch(actions.user.userCreate(userInfo))
    }
}
export default connect(null, mapDispatchToProps)(SignUp)