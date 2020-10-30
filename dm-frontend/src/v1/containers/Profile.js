// package
import React, { Component } from 'react'

// component
import {User} from '../components/user'

class Profile extends Component{
  render(){
    return (
    <div >
      <h1>Profile</h1>
      <User/>
    </div>
    )
  }
}

export default Profile