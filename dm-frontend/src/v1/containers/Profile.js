// package
import React, { Component } from 'react'
import { connect } from 'react-redux'

// component
import {User} from '../components/user'

// actions
import {actions} from '../actions/_index'
import {UserForm} from '../components/userForm'

class Profile extends Component{
  constructor(props){
    super(props)
    this.props.fetch().then((res) =>
      this.setState(
        {user: res })
    )
    this.state={
      user: null,
      saving: false,
      isEditing: false
    }
    this.toggleEdit = this.toggleEdit.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  toggleEdit=()=>{
    this.setState(state=> 
      ({isEditing: !state.isEditing }))
  }

  deleteUser=()=>{
    
    this.props.deRegister(this.state.user)
  }

  onChange=(e)=>{
    e.persist()
        this.setState((state) => ({
          user:{
            ...state.user,
            [e.target.name]: e.target.value 
          }  
        }))
  }

  onSubmit=(e)=>{
    e.preventDefault()
    this.props.upDate(this.state.user)
    this.toggleEdit()
  }
 

  render(){
    const user = this.state.user
    if (user === null ){
      return null
    }
    if (this.state.isEditing) {
      return (
      <div>
        <h1>Edit</h1>
        <UserForm
        user={user}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        /> 
      </div>
      )
    }
    return (
      <div >
        <User user={this.state.user} toggleEdit={this.toggleEdit} deleteUser={this.deleteUser} />
      </div>
    );
  }
}
    

const mapStateToProps=(state)=> {
  return {
    user: state.user.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: ()=>dispatch(actions.user.userFetch()),
    upDate: (user)=>dispatch(actions.user.userUpdate(user)),
    deRegister: (user)=>dispatch(actions.user.userDelete(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)