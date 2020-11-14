// package
import React from 'react'

export const UserForm = (props)=>{
  
    return (
      <div>
        <form onSubmit={props.onSubmit}>
          <input
            type="text" 
            name="name"
            value={props.user.name}
            onChange={(e)=>props.onChange(e)}
            placeholder={props.user.name}
            />


          <input
            type="submit"
            value='Update'/>
        </form>
        <button onClick={()=>props.handleCancel()} className="btn btn-default ">cancel</button>
      </div>
    )
}

