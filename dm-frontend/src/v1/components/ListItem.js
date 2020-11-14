// package
import React from 'react'
import {Button, Card} from 'react-bootstrap'

export const ListItem  = ({item, handleView}) =>{
  return(
    <div className="itemComponent" key={item.id}>
        <Card.Text class="mx-auto">
          {item.title}&nbsp;&nbsp;&nbsp;&nbsp;
          <Button
          variant="outline-info"
          size="sm"
          type='button'
          onClick={()=>handleView(item.user_id, item.id)}
          className="btn btn-default"
          >
            View
          </Button>
        </Card.Text>
    </div>
  )
}