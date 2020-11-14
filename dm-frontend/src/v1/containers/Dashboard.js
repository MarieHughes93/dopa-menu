// package
import React, { Component } from "react"
import { connect } from "react-redux"
// actions
import {actions} from '../actions/_index'
import ItemsList from '../components/itemsList'
import history from '../helpers/history'

class Dashboard extends Component{
  constructor(props){
    super(props)
    this.props.fetch().then((res)=>
    this.setState(
      {menuItems: res}
    ))
    this.state = {
      menuItems: 'loading'
    }
  }
  
  render(){
    const userId = this.props.match.params.id
    const items = this.state.menuItems
    if (items === 'loading' ){
      return(
          <h1>loading</h1>
      )
  }
  const categorgies = ['Appetizer', 'Entree', 'Side', 'Dessert', 'Special']
    return (
    <div >
        <h1>Dashboard</h1>
        <button onClick={() => history.push(`/dopa-menu/${userId}/menuItems/create`)} className="btn btn-default ">Create New</button>
        {categorgies.map((category,indx)=>
        <ItemsList key={indx} items={items} category={category}/>)
        }
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