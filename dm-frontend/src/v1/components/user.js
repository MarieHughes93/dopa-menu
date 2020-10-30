import React  from 'react'
import {Button} from 'react-bootstrap'

export const User =({id, name, email, handleEdit}) =>(
<div className='User' key={id}>
    <li className="userName">
    <strong>Name:</strong> {name}</li>
    <br></br>
    <li className="email">
    <strong>Email:</strong> {email}</li>
    <Button type="button" variant="outline-light" size="sm" key={id} onClick={() => handleEdit()}>LogOut</Button>
</div>
)