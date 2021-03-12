// package
import React from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'

export const ItemUpdateForm = ({menuItem, onChange, onSubmit, cancelButton}) => {
    return(
        <div className='itemUpdateComponent'>
            <Form
            className={`${menuItem.id} update`}
            onSubmit={onSubmit}
            >
                <Form.Group
                className={`${menuItem.id} select item category`}
                as={Row}
                controlId="formSelectCategory"
                >
                    <Form.Label>
                        Category:
                    </Form.Label>
                    <Col>
                        <Form.Control
                        as="select"
                        defaultValue={menuItem.category}
                        name='category'
                        onChange={(e)=>onChange(e)}
                        >
                            <option value=''> Select a category... </option>
                            <option value='Appetizer'> Appetizer </option>
                            <option value='Entree'> Entree </option>
                            <option value='Side'> Side </option>
                            <option value='Dessert'> Dessert </option>
                            <option value='Special'> Special </option>
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group
                className={`${menuItem.id} item Title`}
                as={Row}
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
                className={`${menuItem.id} item description`}
                as={Row}
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
                className={`${menuItem.id} form submit`}
                as={Row}>
                    <Col
                    sm={{span: 10, offset: 1}}
                    >
                        <Button
                        className={`btn ${menuItem.id} btn-UpdateSubmit`}
                        type="submit"
                        variant="dark"
                        >
                            Update!
                        </Button>
                    </Col>
                </Form.Group>
            </Form>
            <Button
            className={`btn ${menuItem.id} btn-HistoryBack`}
            onClick={()=>cancelButton()}
            type='button'
            variant="outline-info"
            >
                Cancel
            </Button>
        </div>
    )
}