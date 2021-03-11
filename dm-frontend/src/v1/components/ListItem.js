// package
import React from 'react'
import {Card} from 'react-bootstrap'

export const ListItem  = ({item, handleView}) =>{
  return(
    <div className={`${item.title} listItemComponent`} key={item.id}>
        <Card.Link className={`${item.id} listItem`}
        href="#"
          onClick={()=>handleView(item.user_id, item.category, item.id)}
          >{item.title}
        </Card.Link>
    </div>
  )
}