// package
import React, { Component } from "react"
import { connect } from "react-redux"
// actions
import {actions} from '../actions/_index'

class Dashboard extends Component{
  
  render(){
  return (
    <div >
        <h1>Dashboard</h1>
    </div>
  )
}
}

const mapStateToProps=(state)=>{
return{
 
}
}

const mapDispatchToProps=(dispatch)=>{
  return{
 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)