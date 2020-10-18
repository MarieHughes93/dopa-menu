import {Link} from 'react-router-dom'
import React, { Component } from "react";
import NavLink from '../components/NavLink'

class NavBar extends Component{

    constructor(props) {
        super(props);
        this.state = {
          links: [
            {path: "/signup", text: "Join", isActive: false},
            {path: "/menu", text: "Dashboard", isActive: false},
            {path: "/profile", text: "Profile", isActive: false},
          ]
        }
      }

      handleClick(i) {
        const links = this.state.links.slice(); 
        for (const j in links) {
          links[j].isActive = i === j ;
        }
        this.setState({links: links});
      }
    
    
      render() {
        return (
          <div>
            <nav className="navbar navbar-expand-lg navbar-light  bg-light">
              <Link className="navbar-brand" to="/">Home</Link>
              <ul className="navbar-nav">
                {this.state.links.map((link, i) => 
                  <NavLink 
                    path={link.path} 
                    text={link.text} 
                    isActive={link.isActive}
                    key={link.path} 
                    onClick={() => this.handleClick(i)}
                  /> 
                  )}
              </ul>
            </nav>
          </div>
        );
      }
    }

export default NavBar;