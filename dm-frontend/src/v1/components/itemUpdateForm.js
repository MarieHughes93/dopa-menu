// package
import React from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'


export const ItemUpdateForm = (props)=>{
    return(
        <div class="mx-auto " style={{width : '400px'}} >
            <Form onSubmit={props.onSubmit}>
                    <Form.Group as={Row} controlId="formSelectCategory">
                        <Form.Label>Category:</Form.Label>
                        <Col>
                            <Form.Control as="select" defaultValue={props.menuItem.category} name='category' onChange={(e)=>props.onChange(e)}>
                                <option value=''>Select a category...</option>
                                <option value='Appetizer'>Appetizer</option>
                                <option value='Entree'>Entree</option>
                                <option value='Side'>Side</option>
                                <option value='Dessert'>Dessert</option>
                                <option value='Special'>Special</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formBasicTitle">
                    <Form.Label>Title:</Form.Label>
                    <Col>
                        <Form.Control
                        type="text" 
                        name="title" 
                        value={props.menuItem.title}
                        onChange={(e)=>props.onChange(e)}
                        placeholder="Title"/>
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formBasicDescription">
                    <Form.Label>Description:</Form.Label>
                    <Col>
                        <Form.Control 
                            as="textarea"
                            name="description"
                            value={props.menuItem.description}
                            onChange={(e)=>props.onChange(e)}
                            placeholder="Description"/>
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

                <Button variant="outline-info" type='button' onClick={()=>props.handleCancel()}>Cancel</Button>

        </div>
    )
}