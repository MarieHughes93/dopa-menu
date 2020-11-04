import React  from 'react'

export const User =({user, toggleEdit, deleteUser }) =>(
    
    <div className="userContainer" key={user.id}>
        <h1>Hello, {user.name}</h1>
        <p><strong>Email:</strong>{user.email}</p>
        <button onClick={toggleEdit} className="btn btn-default  ">edit</button>
        <button onClick={()=>deleteUser(user)} className="btn btn-default  ">delete</button>
    </div>
)