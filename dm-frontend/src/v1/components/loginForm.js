// // package
import React from "react"

import {Form, Row, Col, Button} from 'react-bootstrap'

export const LoginForm=({user,onChange,onSubmit})=>{
    return(
        <div class="mx-auto" style={{width : '400px'}}>
            <Form
            onSubmit={onSubmit}
            >
                <Form.Group
                as={Row}
                controlId="formBasicEmail"
                >
                    <Form.Label>
                        Email:
                    </Form.Label>
                    <Col>
                        <Form.Control
                        size="lg"
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={user.email}
                        onChange={(e)=>onChange(e)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group
                as={Row}
                controlId="formBasicPassword"
                >
                    <Form.Label>
                        Password:
                    </Form.Label>
                    <Col>
                        <Form.Control 
                        size="lg" 
                        type="password" 
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
                        <Button
                        type="submit"
                        >
                            Log In
                        </Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}