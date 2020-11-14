import React  from 'react'
import {Button, Card} from 'react-bootstrap'

export const Item = ({item,toggleEdit, deleteMenuItem,handleBack}) =>(
    <div className="itemComponent" key={item.id}>
        <Card bg={'dark'} text={'white'}>

    <Card.Header>{item.category}</Card.Header>
        <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Button variant="outline-info" type='button' onClick={toggleEdit} className="btn btn-toogleEdit">edit</Button>
        <Button variant="outline-info" type='button' onClick={()=>deleteMenuItem(item)} className="btn btn-deleteMenuItem">delete</Button>
    </Card.Body>
    </Card>
        <Button variant="outline-info" type='button' onClick={()=>handleBack()} className="btn btn-handleBack">Back</Button>

    </div>
    

)