// // package
import React, { Component } from "react"
import {connect} from 'react-redux'
// actions
import {actions} from '../actions/_index'

import {Form, Row, Col, Button} from 'react-bootstrap'

class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
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
            password: ""
        })
    }

    render(){
        return(
            <div class="mx-auto" style={{width : '400px'}} >
                <Form onSubmit={this.onSubmit}>

                    <Form.Group  as={Row} controlId="formBasicEmail">
                        <Form.Label>Email:</Form.Label>
                        <Col>
                            <Form.Control size="lg" type="text" name="email" placeholder="Email"  value={this.state.email} onChange={this.handleOnChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formBasicPassword">
                        <Form.Label>Password:</Form.Label>
                        <Col>
                            <Form.Control 
                                size="lg" 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                value={this.state.password} 
                                onChange={this.handleOnChange}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 1 }}>
                            <Button type="submit">Log In</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (userInfo) => dispatch(actions.app.logIn(userInfo))
    }
}

export default connect(null, mapDispatchToProps)(LoginForm)