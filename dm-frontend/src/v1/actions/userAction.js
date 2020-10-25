import {actionCreator} from './actionCreators'
import {helpers} from '../helpers/_index'
import history from '../helpers/history'


const registerRequest = (payload) => ({type: actionCreator.user.REGISTER_REQUEST, payload})
const registerSuccess = (payload) => ({type: actionCreator.user.REGISTER_SUCCESS, payload})
const registerFailure = (payload) => ({type: actionCreator.user.REGISTER_FAILURE, payload})
const loginRequest = (payload) => ({type: actionCreator.app.SESSION_REQUEST, payload})
const loginSuccess = (payload) => ({type: actionCreator.app.SESSION_START, payload})
const loginFailure =( payload) => ({type: actionCreator.app.SESSION_FAILURE, payload})
const logOutSuccess = (payload) => ({type: actionCreator.app.SESSION_END, payload})

const register = (user) => dispatch => {
    dispatch(registerRequest(user))
        helpers.fetch.apiRegister(user)
            .then(
                data => { 
                    dispatch(registerSuccess(data))
                    history.push('/login')
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
            dispatch(loginSuccess(data))
            history.push('/dashboard')
        },
        error => {
            dispatch(loginFailure(error.toString()))
        }
    )
}
const logOut = () => dispatch =>{
    dispatch(logOutSuccess())
}
        
export const userAction = {
    register,
    logIn,
    logOut
}
