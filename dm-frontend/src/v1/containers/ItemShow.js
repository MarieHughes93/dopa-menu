// package
import React, { Component } from 'react'

import {connect} from 'react-redux'
import { actions } from '../actions/_index'
import {Item} from '../components/item'

class ItemShow extends Component{
  constructor(props){
    super(props)
    const menuItemId = props.match.params.id
    this.props.fetch(menuItemId).then((res) =>
    this.setState(
      {menuItem: res })
  )
    this.state={
      menuItem: null,
      saving: false,
      isEditing: false
    }
    this.toggleEdit = this.toggleEdit.bind(this)
    // this.deleteMenuItem = this.deleteMenuItem.bind(this)
    // this.onChange = this.onChange.bind(this)
    // this.onSubmit = this.onSubmit.bind(this)
  }

  toggleEdit=()=>{
    this.setState(state=> 
      ({isEditing: !state.isEditing }))
  }

  // deleteMenuItem=()=>{
  //   this.props.deleteItem
  // }

  // onChange=(e)=>{
  //   e.persist()
  //       this.setState()
  // }

  // onSubmit=(e)=>{
  //   e.preventDefault()
  //   this.props.upDate(this.state.menuItem)
  //   this.toggleEdit()
  // }

  render(){
    const menuItem = this.state.menuItem
    if (menuItem === null ){
      return (
        <div>
          <h1>Loading....</h1>
        </div>
      )
    }
    // if (this.state.isEditing) {
    //   return (
    //   <div>
    //     <h1>Edit</h1>
    //     <MenuItemForm
    //     menuItem={menuItem}
    //     onChange={this.onChange}
    //     onSubmit={this.onSubmit}
    //     /> 
    //   </div>
    //   )
    // }
    return (
    <div >
      <Item 
        item={menuItem}
        // toggleEdit={}
        // deleteMenuItem={}
      />
    </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetch:(menuItemId)=>dispatch(actions.menuItems.menuItemFetch(menuItemId))
    // update: (menuItem)=>dispatch(actions.user.userUpdate(menuItem)),
    // deleteItem: (menuItem)=>dispatch(actions.menuItems.menuItemDelete(menuItem))
  }
}

export default connect(null, mapDispatchToProps)(ItemShow)