// package
import React, { Component } from "react"
import {Nav,Navbar, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
// components
import ActiveLink from '../components/activeLink'
// actions
import {actions} from '../actions/_index'
// helpers
import history from '../helpers/history'

class NavHeader extends Component{
  render() {
    return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Dopa-Menu</Navbar.Brand>
      <Nav className="routes">
        {this.props.links.map((route) =>
        <ActiveLink
          path={route.path}
          text={route.text}
          isActive={route.isActive}
          key={route.path} 
        />)}
        {this.props.isLoggedIn ?
        <Button type="button" variant="outline-light" size="sm" onClick={() => this.props.logOut()}>LogOut</Button>
        :
        <Button type="button" variant="outline-light" size="sm" onClick={() => history.push('/login')}>Login</Button>}  
      </Nav>
    </Navbar>
    )
  }
}

const mapStateToProps=(state)=> {
  return {
    isLoggedIn: state.app.loggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      logOut: () => dispatch(actions.app.logOut())
  }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(NavHeader)