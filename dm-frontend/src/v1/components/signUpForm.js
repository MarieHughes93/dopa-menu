// package
import React from "react"
import {Form, Row, Col, Button, Card} from 'react-bootstrap'

export const SignUpForm=({user,onChange,onSubmit})=>{
    return(
        <div className="mx-auto" style={{width : '50%'}}>
            <Card
            bg={'dark'}
            text={'white'}
            >
                <Form
                style={{width : '90%', padding: '10%'}}
                onSubmit={onSubmit}
                >
                    <Form.Group
                    as={Row}
                    controlId="formBasicName"
                    >
                        <Form.Label>
                            Name:
                        </Form.Label>
                        <Col >
                            <Form.Control
                            size="lg"
                            type="Name"
                            name="name"
                            placeholder="Enter Name"
                            value={user.name}
                            onChange={(e)=>onChange(e)}
                            />
                        </Col>
                    </Form.Group> 
                    <Form.Group
                    as={Row}
                    controlId="formBasicEmail"
                    >
                        <Form.Label>
                            Email:
                        </Form.Label>
                        <Col >
                            <Form.Control
                            type="email"
                            size="lg"
                            name="email"
                            placeholder="Enter email"
                            value={user.email}
                            onChange={(e)=>onChange(e)}
                            />        
                            <Form.Text
                            className="text-muted"
                            >
                                You cannot change emails after registration.
                            </Form.Text>
                        </Col>
                    </Form.Group>    
                    <Form.Group
                    as={Row}
                    controlId="formBasicPassword"
                    >
                        <Form.Label>
                            Password:
                        </Form.Label>
                        <Col >
                            <Form.Control 
                            type="password"
                            size="lg"
                            name="password"
                            placeholder="Password"
                            value={user.password}
                            onChange={(e)=>onChange(e)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group
                    as={Row}
                    >
                        <Col
                        sm={{span: 10, offset: 1}}
                        >
                            <Form.Text
                            className="text-muted"
                            >
                                We'll never share ANY of your information with anyone else for ANY reason.
                            </Form.Text>
                            <br/>
                            <Button
                            type="submit"
                            >
                                Sign Up
                            </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Card>
        </div>
    )
}