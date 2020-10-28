// import {actions} from '../actions/_index'
let user = localStorage.getItem("sessionID")

const defaultState = user ? {
    loggedIn: true, 
    user }
 : {loggedIn: false,
user: null}


export const appReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'REQUESTING_LOGIN':
            return {
                ...state,
                loading: true,
                loggedIn: false,
                user: null
            }
        case 'LOGIN_FAILURE':
            return {
                ...state,
                loading: false,
                loggedIn: false,
                user: null
            }
        case 'LOGIN_SUCCESSFUL':
            return {
                ...state,
                loading: false,
                loggedIn: true,
                user: action.user
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
                ...state,
                loading: false,
                loggedIn: false,
                user: null
            }
        default: 
            return state
        }
    }