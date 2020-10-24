import React, { Component } from "react"
import ActiveLink from '../components/activeLink'
import {Nav,Navbar } from 'react-bootstrap'

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
          </Navbar>
        )
      }
    }

export default NavHeader