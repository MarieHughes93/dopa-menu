// package
import React, { Component } from "react"
import { connect } from "react-redux"
import {Container} from 'react-bootstrap'
// // actions
import {actions} from '../actions/_index'
// // helpers
// import {helpers} from '../helpers/_index'
// // component
// import ItemsList from '../components/itemsList'

class Category extends Component{
  componentDidMount=()=>{
    this.props.fetch(this.props.match.params.category)
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
