// import {actions} from '../actions/_index'

let sessionID = localStorage.getItem("sessionID")
let userID  = localStorage.getItem("userID")

const initialState = userID ? 
{ loggedIn: true, userID ,sessionID} : {}

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SESSION_REQUEST':
            return {
                loggingIn: true,
        user: action.user
            }
        case 'SESSION_FAILURE':
            return {}
        case 'SESSION_LOGGED':
            return {
                loggedIn: true,
                user: {...action.user}
            }
        case 'SESSION_LOGOUT':
            localStorage.clear()
            return {}
        default: return state
    }
}
