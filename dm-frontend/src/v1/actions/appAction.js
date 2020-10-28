import {helpers} from '../helpers/_index'
import history from '../helpers/history'
import {actionCreator} from './actionCreators'


export const sessionCheck= () => {
    if (localStorage.getItem("sessionID")) {
        return true
    }

    return false
}

const logInRequest = (user) => 
({type: actionCreator.app.LOGIN_REQUEST, user})
const logInFailure = () => 
({type: actionCreator.app.LOGIN_FAILED})
const logInSuccess = (user) => 
({type: actionCreator.app.LOGIN_SUCCESS, user})

export const logIn = (user) => dispatch => {
    dispatch(logInRequest(user))
    helpers.fetch.apiLogin(user)
    .then(
        user => { 
            localStorage.setItem("sessionID", user.token)
            dispatch(logInSuccess(user))
            history.push('/dashboard')
        },
        
        error => {
            dispatch(logInFailure())
        }
    )
}


const logOutRequest = () => 
({type: actionCreator.app.LOGOUT_REQUEST})
const logOutFailure = () => 
({type: actionCreator.app.LOGOUT_FAILED})
const logOutSuccess = () => 
({type: actionCreator.app.LOGOUT_SUCCESS})

export const logOut = () => dispatch => {
    dispatch(logOutRequest())
    helpers.fetch.apilogout()
    .then(
        success => {
            dispatch(logOutSuccess())
            history.push('/')
        },
        error =>{
            dispatch(logOutFailure())
        }
    )
}

export const appAction = {
    logIn,
    logOut,
    sessionCheck
}