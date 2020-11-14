// package
import React, { Component } from "react"
import {Link} from 'react-router-dom'

class ActiveLink extends Component {
  render() {
    return (
      <li className={"nav-item " + (this.props.isActive ? "active": "")}>
        <Link
        className="nav-link"
        to={this.props.path}
        >
          {this.props.text}
        </Link>
      </li>
    )
  }
}
export default ActiveLink