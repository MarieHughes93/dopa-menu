// package
import React from 'react'

export const ItemUpdateForm = (props)=>{
    return(
        <div>
            <form onSubmit={props.onSubmit}>
                <select value={props.menuItem.category} name='category' onChange={(e)=>props.onChange(e)}>
                    <option value='Appetizer'>Appetizer</option>
                    <option value='Entree'>Entree</option>
                    <option value='Side'>Side</option>
                    <option value='Dessert'>Dessert</option>
                    <option value='Special'>Special</option>
                </select>
                <br/>
                <input
                    type="text" 
                    name="title" 
                    value={props.menuItem.title}
                    onChange={(e)=>props.onChange(e)}
                    placeholder={props.menuItem.title}
                />
                <br/>
                <input
                    type="text"
                    name="description"
                    value={props.menuItem.description}
                    onChange={(e)=>props.onChange(e)}
                    placeholder={props.menuItem.description}
                />  
                <br/>
                <input
                    type="submit"
                    value="Update"
                />
            </form>
        </div>
    )
}