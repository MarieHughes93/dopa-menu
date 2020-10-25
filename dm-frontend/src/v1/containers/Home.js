import React, { Component } from "react"
import {actions} from '../actions/_index'

class Home extends Component{
  constructor(props) {
    super(props);

}

  render(){
  return (
    <div >
        <h1>Home-</h1>
        {actions.app.sessionCheck() ? 
                    <button onClick={() => actions.user.logOut()}>Click here to log out</button>
                    : <p> Go to the signup page to join us, or go to Login to login.</p>
                }
    </div>
  )
}
}

export default Home