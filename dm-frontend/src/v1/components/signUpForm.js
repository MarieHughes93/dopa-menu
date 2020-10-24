import React, { Component } from "react"
import {connect} from 'react-redux'
import {actions} from '../actions/_index'

class SignUpForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
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
        this.props.register(this.state)
        this.setState({
            name: "",
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
                        name="name" 
                        value={this.state.name}
                        onChange={this.handleOnChange}
                        placeholder="Name"
                    />
                    <br/>
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
                        value="SignUp"
                    />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (userInfo) => dispatch(actions.user.register(userInfo))
    }
}

export default connect(null, mapDispatchToProps)(SignUpForm)