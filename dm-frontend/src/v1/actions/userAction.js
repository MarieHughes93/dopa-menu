import {actionCreator} from './actionCreators'
import {helpers} from '../helpers/_index'
import history from '../helpers/history'


// user
const registerRequest = (payload) => ({type: actionCreator.user.REGISTER_REQUEST, payload})
const registerFailure = (payload) => ({type: actionCreator.user.REGISTER_FAILURE, payload})
const registerSuccess = (payload) => ({type: actionCreator.user.REGISTER_SUCCESS, payload})

// app
const logInRequest = (payload) => ({type: actionCreator.app.SESSION_REQUEST, payload})
const logInFailure =( payload) => ({type: actionCreator.app.SESSION_FAILURE, payload})
const logInSuccess = (payload) => ({type: actionCreator.app.SESSION_SUCCESS, payload})


const logOutRequest = (payload) => ({type: actionCreator.app.SESSION_END_REQUEST,payload})
const logOutFailure = (payload) => ({type: actionCreator.app.SESSION_END_FAILURE,payload})
const logOutSuccess = (payload) => ({type: actionCreator.app.SESSION_END_SUCCESS,payload})

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
    dispatch(logInRequest(user))
    helpers.fetch.apiLogin(user)
    .then(
        data => { 
            localStorage.setItem("sessionID", data.token)
            dispatch(logInSuccess(data))
            history.push('/dashboard')
        },
        error => {
            dispatch(logInFailure(error.toString()))
        }
    )
}
const logOut = () => {
    helpers.fetch.apilogout()
}
        
export const userAction = {
    register,
    logIn,
    logOut
}
