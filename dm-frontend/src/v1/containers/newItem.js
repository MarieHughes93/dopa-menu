// package
import React, { Component } from "react"
import ItemCreateForm from '../components/itemCreateform'
class NewItem extends Component{
  render(){
    return (
    <div className="new item">
      <h1>Create your item below:</h1>
      <ItemCreateForm/>
    </div>
    )
  }
}

export default NewItem