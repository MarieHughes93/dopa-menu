// package
import React from 'react'
import {Button, Card} from 'react-bootstrap'

export const ListItem  = ({item, handleView}) =>{
  return(
    <div className={`${item.title} listItemComponent`} key={item.id}>
        <Card.Text className={`${item.id}`}>
          {item.title}&nbsp;&nbsp;&nbsp;&nbsp;
          <Button
          variant="outline-info"
          size="sm"
          type='button'
          onClick={()=>handleView(item.user_id, item.id)}
          className={`btn ${item.id} btn-toogleItemShow`}
          >
            View
          </Button>
        </Card.Text>
    </div>
  )
}