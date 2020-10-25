import {actions} from '../actions/_index'
let sessionToken = localStorage.getItem("sessionID")

const defaultState = sessionToken ? 
{ loggedIn: true, 
    user: {sessionToken}
 }:{
    loggedIn: false,
    user: {},
}


export const appReducer = (state = defaultState, action) => {
    switch(action.type){
                case actions.app.SESSION_REQUEST:
                    return {
                        loggingIn: true,
                        user: action.sessionToken
                    }
                case actions.app.SESSION_FAILURE:
                    return {}
                case actions.app.SESSION_START:
                    return {
                        loggedIn: true,
                        user: {...action.sessionToken}
                    }
                case actions.app.SESSION_END:
                    localStorage.clear()
                    return {loggedIn: false }
                default: return state
            }
        }