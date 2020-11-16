// package
import React from "react"
import {Form, Row, Col, Button, Card} from 'react-bootstrap'


export const ItemCreateForm=({toolTip, menuItem,onChange, onSubmit, backButton})=>{
  return(
        <div className='createItemComponent'>
                <Row>
                <Col md={{ span: 6, offset: 2 }}>
            <Card>
            <Form
            className='createItemForm'
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
            </Card>
            </Col>
            <Col>
            {toolTip ?
                <Card>
                    <Card.Body>
                        <Card.Title>{`${toolTip.category}`}</Card.Title>
                        <Card.Text>{`${toolTip.explanation}`}</Card.Text>
                        <Card.Subtitle>{`${toolTip.example}`}</Card.Subtitle>
                    </Card.Body>
                </Card> 
            :
            <Card>
            <Card.Body>
                <Card.Title>Select a Category option for an explination</Card.Title>
                <Card.Text>The info will apper here</Card.Text>
                <Card.Subtitle>With helpful examples</Card.Subtitle>
            </Card.Body>
        </Card> 
            }
                </Col>
                </Row>
        </div>
    )
}