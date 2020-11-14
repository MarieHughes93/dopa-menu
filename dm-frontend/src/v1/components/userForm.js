// package
import React from 'react'
import {Form,Col,Button, Row} from 'react-bootstrap'

export const UserForm = (props)=>{
  
    return (
      <div class="mx-auto " style={{width : '400px'}} >
        <Form onSubmit={props.onSubmit}>

        <Form.Group as={Row} controlId="formBasicTitle">
          <Form.Label>Name:</Form.Label>
          <Col>
            <Form.Control
              type="text"
              name="name"
              value={props.user.name}
              onChange={(e)=>props.onChange(e)}
              placeholder={props.user.name}/>
          </Col>
        </Form.Group>
        <br/>
                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 1 }}>
                    <br/>
                        <Button variant="dark" type="submit">Update!</Button>
                    </Col>
                </Form.Group>
        </Form>
        <Button type='button' onClick={()=>props.handleCancel()} className="btn btn-HistoryBack ">cancel</Button>
      </div>
    )
}

