// package
import React, { Component } from 'react'
import { connect } from 'react-redux'

// component
import {User} from '../components/user'

// actions
import {actions} from '../actions/_index'
import UserForm from '../components/userForm'

class Profile extends Component{
  constructor(props){
    super(props)
    this.state={
    user: this.props.fetch()}
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleEdit=()=>{
    this.props.upDate()
  }
  handleDelete=()=>{
    this.props.deRegister()
  }
  render(){
    if (this.state.isEditing) {
      return (
      <div>
        <h1>edit</h1>
        <UserForm/> 
      </div>
      )
    }
    return (
      <div >
        <User />
      </div>
    );
  }
}
    
    
    
    
    
    
    
    
//     return (
//     <div className="Profile">
//       <h1>Profile</h1>
//       <User 
//       props={this.state} 
//       handleEdit={this.props.handleEdit} 
//       handleDelete={this.props.handleDelete}/>
//     </div>
//     )
//   }
// }

const mapStateToProps=(state)=> {
  return {
    user: state.user.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: ()=>dispatch(actions.user.userFetch()),
    upDate: ()=>dispatch(actions.user.userUpdate()),
    deRegister: ()=>dispatch(actions.user.userDelete())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)