// package
import React, { Component } from "react"
import {connect} from 'react-redux'
// actions
import {actions} from '../actions/_index'
import {Form, Row, Col, Button} from 'react-bootstrap'


class ItemCreateForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            category: '',
            title: '',
            description: ''
        }
        
        this.handleOnChange = this.handleOnChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    handleOnChange = (e) => {
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value 
        }))
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.create(this.state)   
        this.setState({
            category: '',
            title: '',
            description: ''
        })
    }

    render(){
        return(
            <div class="mx-auto " style={{width : '400px'}} >
                
                <Form onSubmit={this.onSubmit}>
                    <Form.Group as={Row} controlId="formSelectCategory">
                        <Form.Label>Category:</Form.Label>
                        <Col>
                            <Form.Control as="select" defaultValue={this.state.category} name='category' onChange={this.handleOnChange}>
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
                        value={this.state.title}
                        onChange={this.handleOnChange}
                        placeholder="Title"/>
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formBasicDescription">
                    <Form.Label>Description:</Form.Label>
                    <Col>
                        <Form.Control 
                            as="textarea"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleOnChange}
                            placeholder="Description"/>
                    </Col>
                    </Form.Group>
                    
                    
                    <br/>
                
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 1 }}>
                            <Form.Text className="text-muted">
                            We'll never share ANY of your information with anyone else for ANY reason.
                        </Form.Text>
                        <br/>
                            <Button variant="dark" type="submit">Create!</Button>
                        </Col>
                    </Form.Group>

                </Form>

                <Button variant="outline-info" type='button' onClick={()=>this.props.handleBack()}>Cancel</Button>

            </div>
        )
    }
}
    
const mapDispatchToProps = (dispatch) => {
    return {
        create: (itemInfo) => dispatch(actions.menuItems.menuItemCreate(itemInfo))
    }
}
    
export default connect(null, mapDispatchToProps)(ItemCreateForm)