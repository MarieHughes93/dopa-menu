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
    const loggedIn = this.props.isLoggedIn
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
        {loggedIn ?
        <Button variant="outline-info" type="button"  size="sm" onClick={() => this.props.logOut()}>Log Out</Button>
        :
        <Button tvariant="outline-info" ype="button" size="sm" onClick={() => history.push('/dopa-menu/login')}>Log In</Button>}  
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