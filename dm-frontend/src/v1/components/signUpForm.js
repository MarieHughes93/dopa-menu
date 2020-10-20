import React, { Component } from "react";

class SignUpForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }
    
    render(){
        return(
            <div>
               <form>
                   <input
                    type=""
                    name=""
                    placeholder=""
                    value=""
                    onChange=""
                   />
                   <br/>
                   <input type="submit" value="" />
               </form>
            </div>
        )
    }
}
export default SignUpForm