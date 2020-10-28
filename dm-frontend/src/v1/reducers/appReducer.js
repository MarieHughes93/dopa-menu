// import {actions} from '../actions/_index'
let sessionID = localStorage.getItem("sessionID")

const defaultState = sessionID ? {
    loggedIn: true, 
    sessionID }
 : {loggedIn: false,
sessionID: null}


export const appReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'REQUESTING_LOGIN':
            return {
                loading: true,
                sessionID: null
            }
        case 'LOGIN_FAILURE':
            return {
                loading: false,
                loggedIn: false,
                sessionID: null
            }
        case 'LOGIN_SUCCESSFUL':
            return {
                loggedIn: true,
                sessionID: action.token
            }
        case 'REQUESTING_LOGOUT':
            return{
                ...state,
                loading: true,
                loggedIn: true
            }
        case 'LOGOUT_FAILURE':
            return{
                ...state,
                loading: false,
                loggedIn: true
            }
        case 'LOGOUT_SUCCESSFULL':
            return {
                loggedIn: false,
                sessionID: null
            }
        case 'RECONNECTING_AUTH':
            return {
                ...state
            }
        case 'AUTH_FAILED':
            return {
                loggedIn: false,
                sessionID: null
            }
        case 'SESSION_AUTHORIZED':
            return {
                loggedIn: true,
                sessionID: action.token
            }
        default: 
            return state
        }
    }