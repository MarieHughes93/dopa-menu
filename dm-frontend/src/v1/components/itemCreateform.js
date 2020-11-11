// package
import React, { Component } from "react"
import {connect} from 'react-redux'
// actions
import {actions} from '../actions/_index'

class ItemCreateForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            category: '',
            title: '',
            description: ''
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
        
    handleOnChange = (e) => {
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value 
        }))
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.create(this.state)   
        this.setState({
            category: '',
            title: '',
            description: ''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <select value={this.state.category} name='category' onChange={this.handleOnChange}>
                    <option value="" disabled selected>Select your option</option>
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
                        value={this.state.title}
                        onChange={this.handleOnChange}
                        placeholder="Title"
                    />
                    <br/>
                    <input
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleOnChange}
                        placeholder="Description"
                    />
                    
                    <br/>
                    <input
                        type="submit"
                        value="Create"
                    />
                </form>
            </div>
        )
    }
}
    
const mapDispatchToProps = (dispatch) => {
    return {
        create: (itemInfo) => dispatch(actions.menuItems.menuItemCreate(itemInfo))
    }
}
    
export default connect(null, mapDispatchToProps)(ItemCreateForm)