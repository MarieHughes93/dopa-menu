// actions
import {actions} from '../actions/_index'

let sessionID = localStorage.getItem('sessionID')

const defaultState = sessionID ? {
    loggedIn: true, sessionID}
    : {loggedIn: false, sessionID: null}

export const appReducer = (state = defaultState, action) => {
    switch(action.type){
        case actions.creator.app.LOGIN_REQUEST:
            return {
                ...state,
                loading: true}
        case actions.creator.app.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                loggedIn: true,
                sessionID: action.token}
        case actions.creator.app.LOGIN_FAILED :
            return {
                ...state,
                loading: false,
                loggedIn: false,
                sessionID: null}
        case actions.creator.app.LOGOUT_REQUEST:
            return{
                ...state,
                loading: true,
                loggedIn: true}
        case actions.creator.app.LOGOUT_SUCCESS:
            return {
                loggedIn: false,
                sessionID: null}
        case actions.creator.app.LOGOUT_FAILED:
            return{
                ...state,
                loading: false,
                loggedIn: true}
        case actions.creator.app.SESSION_FOUND:
            return {
                ...state,
                loading: true}
        case actions.creator.app.SESSION_LOGGEDIN:
            return {
                ...state,
                loading: false,
                loggedIn: true}
        case actions.creator.app.SESSION_FAILED:
            return {
                ...state,
                loading: false,
                loggedIn: false,
                sessionID: null}
    default: 
        return state
    }
}