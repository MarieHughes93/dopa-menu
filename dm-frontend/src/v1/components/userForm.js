// package
import React from 'react'
import {Form,Col,Button, Row} from 'react-bootstrap'

export const UserForm=({user,onChange,onSubmit,cancelButton})=>{
  return(
    <div className="userFormComponent">
      <Form
      className={`${user.id} update`}
      onSubmit={onSubmit}
      >
        <Form.Group
        className={`${user.id} update name`}
        as={Row}
        controlId="formNameUpdate"
        >
          <Form.Label 
          className={`${user.name} update`}>
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
        className={`${user.id} update submit`}
        as={Row}
        >
          <Col
          sm={{span: 10, offset: 1}}>
            <Button
            className={`btn ${user.id} btn-UpdateSubmit`}
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
      className={`btn ${user.id} btn-HistoryBack`}
      >


        cancel
      </Button>
    </div>
  )
}