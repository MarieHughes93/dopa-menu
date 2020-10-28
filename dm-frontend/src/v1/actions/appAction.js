import {helpers} from '../helpers/_index'
import history from '../helpers/history'
import {actionCreator} from './actionCreators'
import {alertAction} from './alertAction'


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
const logInSuccess = (token) => 
({type: actionCreator.app.LOGIN_SUCCESS, token})

export const logIn = (user) => dispatch => {
    dispatch(logInRequest(user))
    helpers.fetch.apiLogin(user)
    .then(
        data => { 
            localStorage.setItem("sessionID", data.token)
            dispatch(logInSuccess(data))
            history.push('/dashboard')
            dispatch(alertAction.notification('Welcome'))
        },
        error => {
            dispatch(logInFailure(error))
            dispatch(alertAction.error(error))
        }
    )
}


const logOutRequest = () => 
({type: actionCreator.app.LOGOUT_REQUEST})
const logOutFailure = () => 
({type: actionCreator.app.LOGOUT_FAILED})
const logOutSuccess = (error) => 
({type: actionCreator.app.LOGOUT_SUCCESS,error})

export const logOut = () => dispatch => {
    dispatch(logOutRequest())
    helpers.fetch.apilogout()
    .then(
        success => {
            dispatch(logOutSuccess())
            history.push('/')
        },
        error =>{
            dispatch(logOutFailure(error))
            dispatch(alertAction.alertError(error.toString()))
        }
    )
}

export const appAction = {
    logIn,
    logOut,
    sessionCheck
}