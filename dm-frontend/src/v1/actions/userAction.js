import {actionCreator} from './actionCreators'
import {helpers} from '../helpers/_index'

const registerRequest = (payload) => ({type: actionCreator.user.REGISTER_REQUEST, payload})
const registerSuccess = (payload) => ({type: actionCreator.user.REGISTER_SUCCESS, payload})
const registerFailure = (payload) => ({type: actionCreator.user.REGISTER_FAILURE, payload})
const loginRequest = (payload) => ({type: actionCreator.auth.SESSION_REQUEST, payload})
const loginSuccess = (payload) => ({type: actionCreator.auth.SESSION_START, payload})
const loginFailure =( payload) => ({type: actionCreator.auth.SESSION_FAILURE, payload})
const logOutSuccess = (payload) => ({type: actionCreator.auth.SESSION_END, payload})

const register = (user) => dispatch => {
    dispatch(registerRequest(user))
        helpers.fetch.apiRegister(user)
            .then(
                data => { 
                    localStorage.setItem("sessionID", data.token)
                    localStorage.setItem("userID", data.user.id)
                    dispatch(registerSuccess(data))
                    
                },
                error => {
                    dispatch(registerFailure(error.toString()))
                }
            )
}
const logIn = (user) => dispatch => {
    dispatch(loginRequest(user))
    helpers.fetch.apiLogin(user)
    .then(
        data => { 
            localStorage.setItem("sessionID", data.token)
            localStorage.setItem("userID", data.user.id)
            dispatch(loginSuccess(data))
        },
        error => {
            dispatch(loginFailure(error.toString()))
        }
    )
}
const logOut = (user) => dispatch =>{
    dispatch(logOutSuccess(user))
    helpers.fetch.apiLogout(user)
}
        
export const userAction = {
    register,
    logIn,
    logOut
}
