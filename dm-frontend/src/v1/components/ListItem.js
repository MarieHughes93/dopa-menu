// package
import React from 'react'


export const ListItem  = ({item, handleView}) =>(
  <div className="itemComponent" key={item.id}>
      <p>{item.title}
      <button onClick={()=>handleView(item.user_id, item.id)} className="btn btn-default">View</button>
      </p>
  </div>
)