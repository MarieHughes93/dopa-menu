import {actionCreator} from './actionCreators'

const registerRequest = (payload) => ({type: actionCreator.user.REGISTER_REQUEST, payload})
const registerSuccess = (payload) => ({type: actionCreator.user.REGISTER_SUCCESS, payload})
const registerFailure = (payload) => ({type: actionCreator.user.REGISTER_FAILURE, payload})

const signUp=()=>{

}


export const userAction = {
    signUp
}