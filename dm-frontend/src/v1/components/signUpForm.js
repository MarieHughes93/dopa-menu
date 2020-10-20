import React, { Component } from "react";

class SignUpForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            password: ''
        }
        this.handleChange = this.onChange.bind(this)
        this.handleSubmit = this.onSubmit.bind(this)
    }

    onChange = (e) => {
        e.persist();
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit = (e) => {
        e.preventDefault()
        console.log("test" + this.state)
        this.setState({
            name: "",
            email: "",
            password: ""
        });
    }
    
    render(){
        return(
            <div>
               <form onSubmit={this.onSubmit}>
                   <input
                    type="text" name="name"
                    value={this.state.name} onChange={this.handleChange}
                    placeholder="Preferred Name"
                   />
                   <br/>
                   <input
                    type="text" name="email"
                    value={this.state.email} onChange={this.handleChange}
                    placeholder="Email"
                   />
                   <br/>
                   <input
                    type="password" name="password"
                    value={this.state.password} onChange={this.handleChange}
                    placeholder="Password"
                   />
                   <br/>
                   <input type="submit" value="Submit" />
               </form>
            </div>
        )
    }
}
export default SignUpForm