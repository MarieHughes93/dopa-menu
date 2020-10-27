import React, { Component } from "react"
import {Nav,Navbar, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import ActiveLink from '../components/activeLink'
import {actions} from '../actions/_index'
import history from '../helpers/history'
// import NavLink from '../components/navlink'

class NavHeader extends Component{
  
  handleLogOutButton = () => {
    this.props.logOut()
  }
  handleLogInButton = () => {
    history.push('/login')
  }
 

  render() {
    const links = this.props.links
    const loggedIn = this.props.loggedIn
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Dopa-Menu</Navbar.Brand>
        <Nav className="routes">
          {links.map((route) =>
            <ActiveLink
              path={route.path}
              text={route.text}
              isActive={route.isActive}
              key={route.path} 
            />)}
            <Button type="button" variant="outline-light" size="sm" onClick={() => this.handleLogOutButton()}>LogOut</Button>
            
            <Button type="button" variant="outline-light" size="sm" onClick={() => this.handleLogInButton()}>Login</Button>
           
        </Nav>
      </Navbar>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      logOut: () => dispatch(actions.user.logOut())
  }
}
    
export default connect(null, mapDispatchToProps)(NavHeader)


