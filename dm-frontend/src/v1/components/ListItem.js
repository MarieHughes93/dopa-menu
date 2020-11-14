// package
import React from 'react'

import {Button, Card} from 'react-bootstrap'

export const ListItem  = ({item, handleView}) =>(
  <div className="itemComponent" key={item.id}>
    <br/>
      <Card.Text class="mx-auto">
        {item.title}     <Button variant="outline-info" size="sm" type='button' onClick={()=>handleView(item.user_id, item.id)} className="btn btn-default">View</Button>
</Card.Text>
  </div>
)