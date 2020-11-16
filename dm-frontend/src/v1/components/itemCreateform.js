// package
import React from "react"
import {Form, Row, Col, Button} from 'react-bootstrap'


export const ItemCreateForm=({menuItem,onChange, onSubmit, backButton})=>{
  return(
        <div className='createItemComponent'>
            <Form
            className='createItem'
            onSubmit={onSubmit}
            >
                <Form.Group
                as={Row}
                className='select item category'
                controlId="formSelectCategory"
                >
                    <Form.Label>
                        Category:
                    </Form.Label>
                    <Col>
                        <Form.Text 
                        className="text-muted"
                        >
                            Select one of the 5 the levels of fulfilment you get:
                        </Form.Text>
                        <Form.Control
                        as="select"
                        name='category'
                        defaultValue={menuItem.category}
                        onChange={(e)=>onChange(e)}
                        >
                            <option value=''> Select a category... </option>
                            <option value='Appetizer'> Appetizer </option>
                            <option value='Entree'> Entree </option>
                            <option value='Side'> Side </option>
                            <option value='Dessert'> Dessert </option>
                            <option value='Special'> Special </option>
                        </Form.Control>
                        <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group
                as={Row}
                className='item Title'
                controlId="formBasicTitle"
                >
                    <Form.Label>
                        Title:
                    </Form.Label>
                    <Col>
                        <Form.Control
                        type="text" 
                        name="title" 
                        value={menuItem.title}
                        onChange={(e)=>onChange(e)}
                        placeholder="Title"
                        />
                    </Col>
                </Form.Group>
                <Form.Group
                as={Row}
                className='item description'
                controlId="formBasicDescription"
                >
                    <Form.Label>
                        Description:
                    </Form.Label>
                    <Col>
                        <Form.Control 
                        as="textarea"
                        name="description"
                        value={menuItem.description}
                        onChange={(e)=>onChange(e)}
                        placeholder="Description"
                        />
                    </Col>
                </Form.Group>
                <Form.Group
                as={Row}
                className='form sbumit'
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
                        className='btn btn-submitCreate'
                        variant="dark"
                        type="submit"
                        >
                            Create!
                        </Button>
                    </Col>
                </Form.Group>
            </Form>
            <Button
            className='btn btn-HistoryBack'
            onClick={()=>backButton()}
            type='button'
            variant="outline-info"
            >
                Cancel
            </Button>
        </div>
    )
}