// // package
import React from "react"

import {Form, Row, Col, Button} from 'react-bootstrap'

export const LoginForm=({user,onChange,onSubmit})=>{
    return(
        <div className="userLoginComponent">
            <Form
            className='user login'
            onSubmit={onSubmit}
            >
                <Form.Group
                className='login email'
                as={Row}
                controlId="formEmail"
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
                className='login Password'
                as={Row}
                controlId="formPassword"
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
                className='login submit'
                as={Row}
                >
                    <Col
                    sm={{span: 10, offset: 1}}
                    >
                        <Button
                        className={`btn btn-LoginSubmit`}
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