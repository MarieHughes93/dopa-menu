// helpers
import {helpers} from '../helpers/_index'
// actions
import {alertAction} from './alertAction'
import {userAction} from './userAction'
import {actionCreator} from './actionCreators'

// check for session
export const activeSession =() => {
    if (localStorage.getItem('sessionID')){
        return true
    }
    return false
}
export const activeUserId=()=>{
    const user =  localStorage.getItem('currentUser')
    return (user) ? JSON.parse(user).id : null
}
// login
export const logInRequest=()=>({type: actionCreator.app.LOGIN_REQUEST})
export const logInSuccess=(token)=>({type: actionCreator.app.LOGIN_SUCCESS, token})
export const logInFailure=()=>({type: actionCreator.app.LOGIN_FAILED})
export const logIn=(user)=>dispatch=>{
    dispatch(logInRequest())
    helpers.fetch.apiLogin(user)
    .then(
        data=>{
            localStorage.setItem('sessionID', data.token)
            localStorage.setItem('currentUser', JSON.stringify(data.user))
            dispatch(logInSuccess(data.user))
            dispatch(userAction.fetchSuccess(data.user))
            helpers.history.push(`/dopa-menu/${data.user.id}/dashboard`)
            dispatch(alertAction.notification(data.heading , data.message))
        },
        error=>{
            dispatch(logInFailure(error))
            dispatch(alertAction.error(error.heading, error.message))
        }
    )
}
// logout
export const logOutRequest=()=>({type: actionCreator.app.LOGOUT_REQUEST})
export const logOutSuccess=()=>({type: actionCreator.app.LOGOUT_SUCCESS})
export const logOutFailure=()=>({type: actionCreator.app.LOGOUT_FAILED})

export const logOut=()=>dispatch=>{
    dispatch(logOutRequest())
    helpers.fetch.apilogout()
    .then(
        data=>{
            dispatch(logOutSuccess())
            dispatch(userAction.userSessionEnd())
            helpers.history.push('/dopa-menu')
        },
        error=>{
            dispatch(logOutFailure())
            dispatch(alertAction.error(error.heading, error.message))
        }
    )
}
// session reconnect
export const sessionFound=()=>({type: actionCreator.app.SESSION_FOUND})
export const sessionLoggedIn=()=>({type: actionCreator.app.SESSION_LOGGEDIN})
export const sessionFailed=()=>({type: actionCreator.app.SESSION_FAILED})
export const sessionReconnect=()=>dispatch=>{
    const sessionId = localStorage.getItem('sessionID')
    if (!sessionId){
        dispatch(logOutSuccess())
        dispatch(userAction.userSessionEnd())
    }else{
        dispatch(sessionFound())
        helpers.fetch.apiSessionAuth()
        .then(
            data=>{
                dispatch(sessionLoggedIn())
                localStorage.setItem('currentUser', JSON.stringify(data.user))
                dispatch(userAction.fetchSuccess(data.user))
                helpers.history.push(`/dopa-menu/${data.user.id}/dashboard`)
                dispatch(alertAction.notification(data.heading , data.message))
            },
            error=>{
                logOut()
                dispatch(sessionFailed(error))
                dispatch(alertAction.error(error.heading, error.message))
            }
        )
    }
}
export const appAction={
    activeSession,
    // login
    logInRequest,
    logInFailure,
    logInSuccess,
    logIn,
    // Logout
    logOutRequest,
    logOutSuccess,
    logOutFailure,
    logOut,
    // sessionReconnect
    sessionFound,
    sessionLoggedIn,
    sessionFailed,
    sessionReconnect,
}