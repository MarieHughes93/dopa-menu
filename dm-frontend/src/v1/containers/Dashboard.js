// package
import React, { Component } from "react"
import { connect } from "react-redux"
import {CardColumns, Button} from 'react-bootstrap'
// actions
import {actions} from '../actions/_index'
// helpers
import history from '../helpers/history'
// component
import ItemsList from '../components/itemsList'

class Dashboard extends Component{
  componentDidMount=()=>{
   this.props.fetch()
  }
  render(){
    const userId = this.props.match.params.id
    const items = this.props.menuItems
    const categorgies = ['Appetizer', 'Entree', 'Side', 'Dessert', 'Special']
    if (items === null){
      return(
        <h1>loading</h1>
      )
    }
    return(
      <div>
        <h1>Dashboard</h1>
        <Button
        variant="outline-info"
        type='button'
        onClick={() => history.push(`/dopa-menu/${userId}/menuItems/create`)} className="btn btn-default"
        >
          Create New
        </Button>
        <CardColumns>
          {categorgies.map((category,indx)=>
            <ItemsList
            key={indx}
            items={items}
            category={category}
            />)
          }
        </CardColumns>
      </div>
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