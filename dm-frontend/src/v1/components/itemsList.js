// package
import React, { Component } from 'react'


import history from '../helpers/history'

import {ListItem} from '../components/ListItem'

class ItemsList  extends Component{
    constructor(props){
        super(props)
        this.handleView = this.handleView.bind(this)
    }

    handleView=(id)=>{
        history.push(`/item/${id}`)
    }

  render(){
      let items = this.props.items
      if (items === null || typeof items === 'undefined'){
          return(
           <h1>You currently have no menu items.</h1>
          )
      }
      items = items.filter(item => item.category === this.props.category)

    return (
        <div className="itemsContainer">
            <h4> {this.props.category} </h4>
        {items.map((item)=>
        
            <ListItem
            item={item}
            handleView={this.handleView}
            />)
        }
    </div>)
  }
}

export default ItemsList
