// package
import React, { Component } from "react"
import { Container } from "react-bootstrap"
import {connect} from 'react-redux'
// actions
import {actions} from '../actions/_index'
// components
import {ItemCreateForm} from '../components/itemCreateform'

import {helpers} from '../helpers/_index'

class NewItem extends Component{
  constructor(props){
  super(props)
  this.state={
    menuItem: {
      category: '',
      title: '',
      description: ''},
      toolTip: null
  }
  this.handleOnChange = this.handleOnChange.bind(this)
  this.handleOnSubmit = this.handleOnSubmit.bind(this)
  this.handleBackButton = this.handleBackButton.bind(this)
  }

  handleOnChange=(e)=>{
    e.persist()
    this.setState((state)=>({
      menuItem:{
        ...state.menuItem,
        [e.target.name]: e.target.value 
      }  
    }))
    if(e.target.name === 'category' && e.target.value === ''){
      this.setState(state=>({
          ...state,
          toolTip: false
      }))
    }
    if(e.target.name === 'category' && e.target.value ){
      const categoryExamples = helpers.util.catgegoryExample
      const example =  categoryExamples.find(cate =>cate.category === e.target.value)
      this.setState(state=>({
          ...state,
          toolTip: example
      }
      ))
    }
  
  }
  handleOnSubmit=(e)=>{
    e.preventDefault()
    this.props.create(this.state.menuItem)   
    this.setState({
      menuItem: {
        category: '',
        title: '',
        description: ''}
    })
  }
  handleBackButton=()=>{
    this.props.history.goBack()
  }  
  render(){
    const {toolTip, menuItem} = this.state
    return (
      <Container className="createItem container">
        <h1>Create your item below:</h1>
  
        <ItemCreateForm
        toolTip={toolTip}
        menuItem={menuItem}
        onChange={this.handleOnChange}
        onSubmit={this.handleOnSubmit}
        backButton={this.handleBackButton}
        />
        </Container>
    )
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
      create: (itemInfo)=>dispatch(actions.menuItems.menuItemCreate(itemInfo))
  }
}
export default connect(null, mapDispatchToProps)(NewItem)