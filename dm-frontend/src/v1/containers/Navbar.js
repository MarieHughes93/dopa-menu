import React, { Component } from "react"
import ActiveLink from '../components/activeLink'
import {Nav,Navbar, Button } from 'react-bootstrap'
import {userAction} from '../actions/userAction'

class NavHeader extends Component{

    constructor(props) {
        super(props)
        this.state = {
          links: [
            {path: "/", text: "Home"},
            {path:'/login', text: 'LogIn'},
            {path: "/signup", text: "Join"},
            {path: "/dashboard", text: "Dashboard"},
            {path: "/profile", text: "Profile"},
          ]
        }
      }

      handleClick(e) {
        const links = this.state.links.slice()
        for (const j in links) {
          links[j].isActive = e === j 
        }
        this.setState({links: links})
      }
      handleLogOut = () => {
        return userAction.logOut()
      }
    
    
      render() {
        return (
          <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Dopa-Menu</Navbar.Brand>
          <Nav className="routes">
          {this.state.links.map((link,e) => 
            <ActiveLink
              path={link.path}
              text={link.text}
              isActive={link.isActive}
              key={link.path} 
              onClick={() => this.handleClick(e)}
          />)}
					</Nav>
          <Button type="button" variant="outline-light" size="sm" onClick={this.handleLogOut()}>LogOut</Button>
          </Navbar>
        )
      }
    }

export default NavHeader