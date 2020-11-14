// package
import React, { Component } from "react"
import ItemCreateForm from '../components/itemCreateform'

class NewItem extends Component{
  constructor(props){
  super(props)
  this.handleBack = this.handleBack.bind(this)
  }
        
  handleBack=()=>{
    this.props.history.goBack()
  }
  render(){
    return (
    <div className="new item">
      <h1>Create your item below:</h1>
      <ItemCreateForm
      handleBack={this.handleBack}/>
    </div>
    )
  }
}

export default NewItem