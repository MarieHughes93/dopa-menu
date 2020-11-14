// package
import React, { Component } from 'react'
import { connect } from 'react-redux'
// actions
import {actions} from '../actions/_index'
// component
import {User} from '../components/user'
import {UserForm} from '../components/userForm'

class Profile extends Component{
  constructor(props){
    super(props)
    this.state={
      user: null,
      saving: false,
      isEditing: false
    }
    this.toggleUserEdit = this.toggleUserEdit.bind(this)
    this.handleDeleteUser = this.handleDeleteUser.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }
  toggleUserEdit=()=>{
    this.setState(state=> ({
      isEditing: !state.isEditing
    }))
  }
  handleDeleteUser=()=>{
    this.props.deRegister(this.state.user)
  }
  handleOnChange=(e)=>{
    e.persist()
    this.setState((state)=>({
      user:{
        ...state.user,
        [e.target.name]: e.target.value 
      }  
    }))
  }
  handleOnSubmit=(e)=>{
    e.preventDefault()
    this.props.upDate(this.state.user)
    this.toggleUserEdit()
  }
  componentDidMount=()=>{
    this.props.fetch().then((res)=>
      this.setState(
        {user: res})
    )
  }
  render(){
    const user = this.state.user
    if (user === null ){
      return(
        <div>
          <h1>Loading....</h1>
        </div>
      )
    }
    if (this.state.isEditing) {
      return(
        <div>
          <h1>Edit</h1>
          <UserForm
          user={user}
          onChange={this.handleOnChange}
          onSubmit={this.handleOnSubmit}
          cancelButton={this.toggleUserEdit}
          /> 
        </div>
      )
    }
    return(
      <div>
        <User
        user={this.state.user}
        toggleUserEdit={this.toggleUserEdit}
        deleteUserButton={this.handleDeleteUser}
        />
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    user: state.user.currentUser
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    fetch: ()=>dispatch(actions.user.userFetch()),
    upDate: (user)=>dispatch(actions.user.userUpdate(user)),
    deRegister: (user)=>dispatch(actions.user.userDelete(user))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)