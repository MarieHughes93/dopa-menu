// package
import React, { Component } from 'react'
import {connect} from 'react-redux'
// actions
import { actions } from '../actions/_index'
// component
import {Item} from '../components/item'
import {ItemUpdateForm} from '../components/itemUpdateForm'

class ItemShow extends Component{
  constructor(props){
    super(props)
    this.state={
      menuItem: 'loading',
      saving: false,
      isEditing: false
    }
    this.toggleItemEdit = this.toggleItemEdit.bind(this)
    this.handleBackButton = this.handleBackButton.bind(this)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }
  toggleItemEdit=()=>{
    this.setState(state=>({
      isEditing: !state.isEditing
    }))
  }
  handleBackButton=()=>{
    this.props.history.goBack()
  }
  handleDeleteItem=()=>{
    this.props.deleteItem(this.state.menuItem)
  }
  handleOnChange=(e)=>{
    e.persist()
    this.setState((state)=>({
      menuItem:{
        ...state.menuItem,
        [e.target.name]: e.target.value 
      }  
    }))
  }
  handleOnSubmit=(e)=>{
    e.preventDefault()
    this.props.upDate(this.state.menuItem)
    this.toggleItemEdit()
  }
  componentDidMount=()=>{
    const itemId = this.props.match.params.itemId
    this.props.fetch(itemId).then((res)=>
      this.setState({
        menuItem: res
      })
    )
  }
  render(){
    const menuItem = this.state.menuItem
    if (menuItem === 'loading'){
      return(
        <div className='loading'>
          <h1>Loading....</h1>
        </div>
      )
    }
    if (this.state.isEditing){
      return(
        <div className='itemsShow container'>
          <h1>Edit</h1>
          <ItemUpdateForm
          menuItem={menuItem}
          onChange={this.handleOnChange}
          onSubmit={this.handleOnSubmit}
          cancelButton={this.toggleItemEdit}
          /> 
        </div>
      )
    }
    return(
      <div className='itemsShow container'>
        <Item 
        item={menuItem}
        toggleItemEdit={this.toggleItemEdit}
        deleteMenuItem={this.handleDeleteItem}
        backButton={this.handleBackButton}
        />
      </div>
    )
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    fetch: (menuItemId)=>dispatch(actions.menuItems.menuItemFetch(menuItemId)),
    upDate: (menuItem)=>dispatch(actions.menuItems.menuItemUpdate(menuItem)),
    deleteItem: (menuItem)=>dispatch(actions.menuItems.menuItemDelete(menuItem))
  }
}
export default connect(null, mapDispatchToProps)(ItemShow)