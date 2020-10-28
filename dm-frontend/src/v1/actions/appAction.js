import {helpers} from '../helpers/_index'
import history from '../helpers/history'
import {actionCreator} from './actionCreators'
import {alertAction} from './alertAction'

export const activeSession =() => {
    if (localStorage.getItem("sessionID")) {
        return true
    }
    return false
}

const sessionFound = () => 
({type: actionCreator.app.SESSION_FOUND})
const sessionLoggedIn = (token) => 
({type: actionCreator.app.SESSION_LOGGEDIN, token})
const sessionFailed = () => 
({type: actionCreator.app.SESSION_FAILED})

export const sessionReconnect= () => dispatch => {
    const sessionId = localStorage.getItem("sessionID")
    if (!sessionId) {return false
    }else{
    dispatch(sessionFound())
    helpers.fetch.apiSessionAuth(sessionId)
    .then(
        data => {
            dispatch(sessionLoggedIn(data))
            history.push('/dashboard')
            dispatch(alertAction.notification('Welcome Back'))
        },
        error => {
            dispatch(sessionFailed(error))
            dispatch(alertAction.error(error))
        }
    )}
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
    sessionReconnect,
    activeSession
}