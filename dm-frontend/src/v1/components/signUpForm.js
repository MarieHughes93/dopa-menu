// package
import React, { Component } from "react"
import {connect} from 'react-redux'
// actions
import {actions} from '../actions/_index'
import {Form, Row, Col, Button} from 'react-bootstrap'

class SignUpForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
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
        this.props.register(this.state)
        
        this.setState({
            name: "",
            email: "",
            password: ""
        })
    }

    render(){
        return(
            <div class="mx-auto " style={{width : '400px'}} >
                <Form onSubmit={this.onSubmit}>
                    <Form.Group as={Row} controlId="formBasicName">
                    <Form.Label >
                        Name:</Form.Label>
                    <Col >
                        <Form.Control size="lg" type="Name" name="name"  placeholder="Enter Name" value={this.state.name} onChange={this.handleOnChange}/>
                    </Col>
                    </Form.Group>
                    
                    <Form.Group  as={Row} controlId="formBasicEmail">
                    <Form.Label>
                        Email:</Form.Label>
                    <Col >
                        <Form.Control type="email" size="lg" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleOnChange}/>        
                    <Form.Text className="text-muted"> You cannot change emails after registration. </Form.Text>
                    </Col>
                    </Form.Group>
                        
                    <Form.Group as={Row} controlId="formBasicPassword">
                    <Form.Label >
                            Password:</Form.Label>
                    <Col >
                        <Form.Control type="password" size="lg" name="password" placeholder="Password" value={this.state.password} onChange={this.handleOnChange}/>
                    </Col>
                    </Form.Group>
                    <br/>
                
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 1 }}>
                            <Form.Text className="text-muted">
                            We'll never share ANY of your information with anyone else for ANY reason.
                        </Form.Text>
                        <br/>
                            <Button type="submit">Sign in</Button>
                        </Col>
                    </Form.Group>

                </Form>

               
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (userInfo) => dispatch(actions.user.userCreate(userInfo))
    }
}

export default connect(null, mapDispatchToProps)(SignUpForm)