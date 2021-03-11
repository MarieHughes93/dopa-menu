// package
import React, { Component } from "react"
import { connect } from "react-redux"
import {Container, Button, Row,} from 'react-bootstrap'
// actions
import {actions} from '../actions/_index'
// helpers
import {helpers} from '../helpers/_index'
// component
import ItemsList from '../components/itemsList'

class Dashboard extends Component{
  componentDidMount=()=>{
   this.props.fetch()
  }
  render(){
    const userId = this.props.match.params.id
    const items = this.props.menuItems
    if (items === null || typeof items === 'undefined'){
      return(
        <h1>loading</h1>
      )
    }
    const categories = helpers.util.categoriesColums
    return(
      <Container className='Dashboard'>
        <h1>Dashboard</h1>
        <br/>
        <Button
        variant="outline-info"
        type='button'
        className="btn btn-CreateItem"
        onClick={() => helpers.history.push(`/dopa-menu/${userId}/create`)}
        >
          Create New
        </Button>
        <br/>
        <br/>
          <Row
          className='menuItems'>
            {categories.map(([category,column],indx)=>
            <ItemsList
            key={indx}
            column={column}
            items={items}
            category={category}
            />)}
          </Row>
        </Container>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    menuItems: state.menuItems.items
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    fetch: ()=>dispatch(actions.menuItems.menuItemsFetch())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)


