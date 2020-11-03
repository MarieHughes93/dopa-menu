// actions
import {actions} from '../actions/_index'

let sessionID = localStorage.getItem('sessionID')
let user = localStorage.getItem('user')
const defaultState = sessionID ? {
    loggedIn: true, sessionID , user}
    : {loggedIn: false, sessionID: null, user: null}

export const appReducer = (state = defaultState, action) => {
    switch(action.type){
        case actions.creator.app.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,}
        case actions.creator.app.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                sessionID: action.token,
                user: action.user}
        case actions.creator.app.LOGIN_FAILED :
            return {
                loading: false,
                loggedIn: false,
                sessionID: null,
                user: null}
        case actions.creator.app.LOGOUT_REQUEST:
            return{
                ...state,
                loading: true,
                loggedIn: true}
        case actions.creator.app.LOGOUT_SUCCESS:
            return {
                loggedIn: false,
                sessionID: null,
                user: null}
        case actions.creator.app.LOGOUT_FAILED:
            return{
                ...state,
                loading: false,
                loggedIn: true}
        case actions.creator.app.SESSION_FOUND:
            return {
                ...state}
        case actions.creator.app.SESSION_LOGGEDIN:
            return {
                ...state,
                loggedIn: true,
                user: action.user}
        case actions.creator.app.SESSION_FAILED:
            return {
                ...state,
                loggedIn: false,
                sessionID: null,
                user: null}
    default: 
        return state
    }
}