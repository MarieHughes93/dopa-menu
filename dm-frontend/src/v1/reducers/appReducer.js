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
        default: 
            return state
        }
    }