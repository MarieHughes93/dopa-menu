// package
import React from 'react'
import {Form,Col,Button, Row} from 'react-bootstrap'

export const UserForm=({user,onChange,onSubmit,cancelButton})=>{
  return(
    <div class="mx-auto" style={{width : '400px'}}>
      <Form
      onSubmit={onSubmit}
      >
        <Form.Group
        as={Row}
        controlId="formBasicTitle"
        >
          <Form.Label>
            Name:
          </Form.Label>
          <Col>
            <Form.Control
            type="text"
            name="name"
            value={user.name}
            onChange={(e)=>onChange(e)}
            placeholder={user.name}
            />
          </Col>
        </Form.Group>
        <Form.Group
        as={Row}
        >
          <Col
          sm={{span: 10, offset: 1}}>
            <Button
            variant="dark"
            type="submit"
            >
              Update!
            </Button>
          </Col>
        </Form.Group>
      </Form>
      <Button
      type='button'
      onClick={()=>cancelButton()}
      className="btn btn-HistoryBack"
      >
        cancel
      </Button>
    </div>
  )
}