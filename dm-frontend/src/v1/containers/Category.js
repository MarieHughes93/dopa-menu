// package
import React, { Component } from "react"
import { connect } from "react-redux"
import {Container, CardDeck} from 'react-bootstrap'
// // actions
import {actions} from '../actions/_index'
// helpers
import history from '../helpers/history'


import CategoryItemsList from '../components/categoryItemsList'

class Category extends Component{
  
   constructor(props){
    super(props)
    this.handleView = this.handleView.bind(this)
  }
  componentDidMount=()=>{
    this.props.fetch(this.props.match.params.category)
  }
  handleView=(id, category,itemId)=>{
    history.push(`/dopa-menu/${id}/${category}/${itemId}`)
  }

  render(){
    const userId = this.props.match.params.id
    const items = this.props.menuItems
    if (items === null || typeof items === 'undefined'){
      return(
        <h1>loading</h1>
      )
    }
    return(
      <Container className='Category'>
        <CardDeck>
          {items.map(({title, category, description,userId},indx)=>
          <CategoryItemsList
            user= {userId}
            category={category}
            key={indx}
            title={title}
            description={description}
            handleView={this.handleView}
          />)}
        </CardDeck>
      </Container>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    menuItems: state.menuItems.categoryItems
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    fetch: (category)=>dispatch(actions.menuItems.categoryMenuItems(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
