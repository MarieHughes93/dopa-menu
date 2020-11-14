import React  from 'react'
import {Button, Card} from 'react-bootstrap'


export const User =({user, toggleEdit, deleteUser }) =>(
    
    <div className="userComponent" key={user.id}>
        <Card bg={'dark'} text={'white'}>
        <Card.Header>Profile</Card.Header>
        <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text><strong>Email:</strong>{user.email}</Card.Text>
        <Button variant="outline-info" type='button' onClick={toggleEdit} className="btn btn-userEdit">Edit</Button>
        <Button variant="outline-info" type='button' onClick={()=>deleteUser(user)} className="btn btn-userDelete">delete</Button>
    </Card.Body>
    </Card>
    </div>
)