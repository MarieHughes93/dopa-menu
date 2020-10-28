// import {actions} from '../actions/_index'
let user = localStorage.getItem("sessionID")

const defaultState = user ? {
    loggedIn: true, 
    user }
 : {}


export const appReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'REQUESTING_LOGIN':
            return {
                loggingIn: true,
                loadingUser: action.user
            }
        case 'LOGIN_FAILURE':
            return {
                ...state
            }
        case 'LOGIN_SUCCESSFUL':
            return {
                loggedIn: true,
                user: action.user
            }
        case 'REQUESTING_LOGOUT':
            return{
                loggingOut: true,
                user:{}
            }
        case 'LOGOUT_FAILURE':
            return{
                ...state
            }
        case 'LOGOUT_SUCCESSFULL':
            return {
                loggedIn: false
            }
        default: 
            return state
        }
    }