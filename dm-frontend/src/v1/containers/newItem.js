// package
import React, { Component } from "react"
import {connect} from 'react-redux'
// actions
import {actions} from '../actions/_index'
// components
import {ItemCreateForm} from '../components/itemCreateform'

class NewItem extends Component{
  constructor(props){
  super(props)
  this.state={
      category: '',
      title: '',
      description: ''
  }
  this.handleOnChange = this.handleOnChange.bind(this)
  this.handleOnSubmit = this.handleOnSubmit.bind(this)
  this.handleBackButton = this.handleBackButton.bind(this)
  }
  handleOnChange=(e)=>{
    e.persist()
    this.setState(()=>({
      [e.target.name]: e.target.value 
    }))
  }
  handleOnSubmit=(e)=>{
    e.preventDefault()
    this.props.create(this.state)   
    this.setState({
        category: '',
        title: '',
        description: ''
    })
  }
  handleBackButton=()=>{
    this.props.history.goBack()
  }  
  render(){
    return (
      <div className="new item">
        <h1>Create your item below:</h1>
        <ItemCreateForm
        menuItem={this.state}
        onChange={this.handleOnChange}
        onSubmit={this.handleOnSubmit}
        backButton={this.handleBackButton}
        />
      </div>
    )
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
      create: (itemInfo)=>dispatch(actions.menuItems.menuItemCreate(itemInfo))
  }
}
export default connect(null, mapDispatchToProps)(NewItem)