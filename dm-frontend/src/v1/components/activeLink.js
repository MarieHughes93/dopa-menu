// package
import React, { Component } from "react"
import {Link} from 'react-router-dom'

class ActiveLink extends Component {
  render() {
    const {path, text, isActive} = this.props
    return (
      <li className={"nav-item " + (isActive ? "active": "")}>
        <Link
        className="nav-link"
        to={path}
        >
          {text}
        </Link>
      </li>
    )
  }
}
export default ActiveLink