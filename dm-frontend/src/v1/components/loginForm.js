import React, { Component } from "react"
import {connect} from 'react-redux'
import {actions} from '../actions/_index'

class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password_digest: ''
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    handleOnChange = (e) => {
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value 
        }))
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.login(this.state)
        this.setState({
            email: "",
            password_digest: ""
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        name="email" 
                        value={this.state.email}
                        onChange={this.handleOnChange}
                        placeholder="Email" 
                    />
                    <br/>
                    <input
                        type="password"
                        name="password_digest"
                        value={this.state.password_digest}
                        onChange={this.handleOnChange}
                        placeholder="Password"
                    />
                    <br/>
                    <input
                        type="submit"
                        value="Login"
                    />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (userInfo) => dispatch(actions.user.logIn(userInfo))
    }
}

export default connect(null, mapDispatchToProps)(LoginForm)