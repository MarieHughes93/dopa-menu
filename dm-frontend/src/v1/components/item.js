import React  from 'react'

export const Item = ({item,toggleEdit, deleteMenuItem,handleBack}) =>(
    
    <div className="itemComponent" key={item.id}>
        <h4>{item.category}</h4>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <button onClick={toggleEdit} className="btn btn-default  ">edit</button>
        <button onClick={()=>deleteMenuItem(item)} className="btn btn-default  ">delete</button>
        <button onClick={()=>handleBack()} className="btn btn-default ">Back</button>
    </div>
)